@extends('template.index')

@section('content')
   

    <div class="container-fluid">
        <div class="row">
           
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                         <!-- Navbar -->
                        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                            <div class="container-fluid">
                                <div class="navbar-wrapper">
                                    <a class="navbar-brand" href="#pablo">Dashboard</a>
                                </div>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="navbar-toggler-icon icon-bar"></span>
                                    <span class="navbar-toggler-icon icon-bar"></span>
                                    <span class="navbar-toggler-icon icon-bar"></span>
                                </button>
                                @include('template.menu')
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="carousel slide" id="carousel-330053">
                            <div class="carousel-inner">
                                <div class="carousel-item active d-flex flex-column">
                                    <img class="d-block d-flex justify-content-center"style="width:900px;height:800px" alt="Carousel Bootstrap First" src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/87742313_10206415082011339_1740748136239857664_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=2RsK16bWQSYAX8uPamn&_nc_ht=scontent.fceb2-2.fna&oh=9a5268aa1b0ac6f43c2433b3dc80a1e3&oe=5E820051" />
                                    <div class="carousel-caption">
                                        <h4>
                                            First Thumbnail label
                                        </h4>
                                        <p>
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        </p>
                                    </div>
                                </div>
                                
                            </div> <a class="carousel-control-prev" href="#carousel-330053" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-330053" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-4" >
                             <img class="d-block ml-5" style="width:300px;" src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/p720x720/70465798_2522877791103148_3910462732532449280_o.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=8dZRXRZkEpMAX_4BO0x&_nc_ht=scontent.fceb2-2.fna&_nc_tp=6&oh=6783408c60748a25343ccba144d943b4&oe=5E848B8C" />
                             <p class="ml-5">JUCEL G. SOLANTE</p>
                            </div>
                            <div class="col-md-4">
                            <img class="d-block w-100" src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/23843286_1607845979279703_8477291083452735347_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=_xdhG3IMcJ8AX-BJj3Q&_nc_ht=scontent.fceb2-2.fna&oh=1d5b1886a3cb89b3810fdaff5658862d&oe=5E83AE72" />
                            <p>AHRVE KIM E. JABONILLO</p>
                            </div>
                            <div class="col-md-4">
                            <img class="d-block" style="width:400px;height:400px" src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/71926538_2592488474175220_5177490712056299520_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=gRZH4yvhVowAX86ijW8&_nc_ht=scontent.fceb2-1.fna&oh=2107480afc70635a8d13f4a859d427cd&oe=5E84E02E" />
                            <p>BENNY PANARES</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
@endsection
