<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    
 
    public function index()
    {
        $Users = User::all();
        return response()->json([
            'users' => $Users
        ]);
    }

    public function store(Request $request)
    {
        if (!Auth::user()->isAdmin()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'role' => 'required|in:Admin,Moderator,User'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $User = new User;
        $User->name = $request->name;
        $User->password =  Hash::make($request->password);
        $User->email = $request->email;
        $User->role = $request->role;
        $User->save();

        return response()->json([
            'message' => 'User created successfully',
            'users' => $User
        ]);
    }



    public function show($id)
    {
        $User = User::find($id);

        if (!$User) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($User);
    }


    public function update(Request $request, $id)
    {
        if (!Auth::user()->isAdmin() && !Auth::user()->isModerator()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $User = User::find($id);
        if (!$User) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        $User->name = $request->name ?? $User->name;
        $User->email = $request->email ?? $User->email;
        $User->role = $request->role ?? $User->role;
        $User->save();

        return response()->json([
            'message' => 'User updated successfully',
            'User' => $User
        ]);
    }

    public function destroy($id)
    {
        if (!Auth::user()->isAdmin()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $User = User::find($id);
        if (!$User) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        $User->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }
}
