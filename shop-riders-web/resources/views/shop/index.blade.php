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
            <div class="row">
                <a href="" class="btn btn-primary"><i class="plus-icons"></i> Add</a>
            </div>
            <div class="row">
                <table class="table table-condesed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Desc</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
@endsection
