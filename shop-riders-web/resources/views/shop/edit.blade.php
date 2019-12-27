@extends('template.index')

@section('content')
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <a class="navbar-brand" href="{{ route('admin.shops') }}">Shops</a>
            </div>
            @include('template.menu');
        </div>
    </nav>
    <div class="content">
        <div class="container-fluid">
            <edit-shop :shopInfo="{{ json_encode($shopInfo) }}"></edit-shop>
        </div>
    </div>
@endsection
