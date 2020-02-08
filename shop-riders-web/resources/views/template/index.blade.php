<!--
=========================================================
 Material Dashboard - v2.1.1
=========================================================

 Product Page: https://www.creative-tim.com/product/material-dashboard
 Copyright 2019 Creative Tim (https://www.creative-tim.com)
 Licensed under MIT (https://github.com/creativetimofficial/material-dashboard/blob/master/LICENSE.md)

 Coded by Creative Tim

=========================================================

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/img/apple-icon.png')}}">
  <link rel="icon" type="image/png" href="{{ asset('assets/img/favicon.png')}}">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Material Dashboard by Creative Tim
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="{{ asset('assets/css/material-dashboard.css?v=2.1.1')}}" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="{{ asset('assets/demo/demo.css')}}" rel="stylesheet" />
</head>

<body class="">
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a href="{{ route('home') }}" class="simple-text logo-normal">
          Shop Riders
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item {{ (request()->is('home')) ? 'active' : '' }}">
            <a class="nav-link" href="{{ url('home') }}">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item {{ (request()->is('admin/users')) ? 'active' : '' }}">
            <a class="nav-link" href="">
              <i class="material-icons">person</i>
              <p>Users</p>
            </a>
          </li>
          <li class="nav-item {{ (request()->is('admin/shops')) ? 'active' : '' }}">
            <a class="nav-link" href="{{ url('admin/shops') }}">
              <i class="material-icons">content_paste</i>
              <p>Shops</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel" id="app">
      <!-- End Navbar -->
      @yield('content')
    </div>
  </div>

  <script src="{{ mix('js/app.js') }}"></script>
  @stack('scripts')
    <!-- Core JS Files   -->
  <script src="{{ asset('assets/js/core/jquery.min.js')}}"></script>
  <script src="{{ asset('assets/js/core/popper.min.js')}}"></script>
  <script src="{{ asset('assets/js/core/bootstrap-material-design.min.js')}}"></script>
  <script src="{{ asset('assets/js/plugins/perfect-scrollbar.jquery.min.js')}}"></script>
  
</body>

</html>
