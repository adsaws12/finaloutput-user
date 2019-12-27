@extends('template.index')

@section('content')
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <a class="navbar-brand" href="{{ route('admin.shop.edit', $shop['id']) }}">EDIT</a>
            </div>
            @include('template.menu');
        </div>
    </nav>
    <div class="content">
        <div class="container-fluid">
            <edit-component :shop="{{ json_encode($shop) }}"></edit-component>
        </div>
    </div>
@endsection
