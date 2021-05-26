<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Service\PermissionService;
use App\Service\RoleService;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth('api')->attempt($credentials)) {
            return $this->fail('账号或密码错误');
        }
        return $this->respondWithToken($token);
    }

    /**
     * 获取用户信息
     * @param PermissionService $permissionService
     * @param RoleService $roleService
     * @return JsonResponse
     */
    public function me(PermissionService $permissionService,RoleService $roleService)
    {
        $menu = $roleService->getRoles(auth('api')->id());
        $permissions_menu_array = [];
        $permissions_array = [];

        foreach ($menu as $value){
            list($permissionsMenu, $permissions) = $permissionService->getPermissionMenu($value->id);

            $permissions_menu_array[] = $permissionsMenu;
            $permissions_array[] = $permissions;
        }

        //将这个数组合并
        $permissions_menu_array = array_reduce($permissions_menu_array,'array_merge',[]);

        $user = auth('api')->user();
        $user->menu = $permissions_menu_array;

        return $this->success($user);

    }

    public function logout()
    {
        auth('api')->logout();
        return $this->success([],'Successfully logged out');
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * @param UserUpdateRequest $request
     * @return JsonResponse
     * 更新用户信息
     */
    public function update(UserUpdateRequest $request)
    {
        if(!empty($request->password) || !empty($request->old_password)) {
            $old_password = Hash::make($request->old_password);

            if(User::query()->where('id',auth('api')->id())->where('password',$old_password)->doesntExist()){
                return $this->fail('密码错误');
            }

            $update['password'] = Hash::make($request->password);
        }


        $update['name'] = $request->name;
        $update['avatar'] = $request->avatar;

        if((int)auth('api')->id() != 9){
            User::query()->where('id',auth('api')->id())
                ->update($update);
        }


        return $this->success([
            'name'=>$request->name,
            'avatar'=>$request->avatar
        ]);
    }

    /**
     * @param $token
     * @return JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'code'=>200,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }


}
