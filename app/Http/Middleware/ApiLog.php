<?php

namespace App\Http\Middleware;

use App\Models\Log;
use Closure;

class ApiLog
{

    //过滤路由
    protected static $url = [
        'api/admin/log',
        'api/admin/log/{id}'
    ];

    //记录访问的方法
    protected static $method = ['DELETE','POST','PUT','PUTCH','GET'];
    /**
     * 日志访问中间件
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /**
         * 是否开启日志记录
         */
        if(env('OPERATION_LOG')==false) {
            return $next($request);
        }
        /**
         * 功能过滤
         */
        if(!in_array($request->route()->uri(),static::$url) && in_array($request->method(),static::$method)){
            Log::query()->create([
                'url'    => $request->route()->uri(),
                'method' => $request->method(),
                'ip'     => $request->getClientIp(),
                'u_id'   => auth('api')->id(),
                'address'   =>'',
                'name'   => auth('api')->user()->name
            ]);
        }
        return $next($request);
    }
}
