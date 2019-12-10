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
                <a href="{{ route('admin.shop.add') }}" class="btn btn-primary">
                    <i class="plus-icons"></i>
                    Add
                </a>
            </div>
            <div class="row">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title ">Shop List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <tr>
                                        <th>Name</th>
                                        <th>Desc</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($shops as $shop)
                                        <tr>
                                            <td>{{ $shop->name }}</td>
                                            <td>{{ $shop->description }}</td>
                                            <td width="100">
                                                <a href="">
                                                    <i class="material-icons">
                                                        edit
                                                    </i>
                                                </a>
                                                <a href="">
                                                    <i class="material-icons">
                                                        delete
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
