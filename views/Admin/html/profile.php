<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <title>Utsao</title>
    <!-- Favicon icon -->
    
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../images/fav.png  "
    />
    <!-- Custom CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/libs/select2/dist/css/select2.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/libs/jquery-minicolors/jquery.minicolors.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/libs/quill/dist/quill.snow.css"
    />
    <link href="../dist/css/style.min.css" rel="stylesheet" />
    <link href="../dist/css/new-style.css" rel="stylesheet" />
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>          
              <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
          <div class="lds-pos"></div>
          <div class="lds-pos"></div>
        </div>
      </div>
      <!-- ============================================================== -->
      <!-- Main wrapper - style you can find in pages.scss -->
      <!-- ============================================================== -->
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar" data-navbarbg="skin5">
          <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <div class="navbar-header" data-logobg="skin5">
              <!-- ============================================================== -->
              <!-- Logo -->
              <!-- ============================================================== -->
              <a class="navbar-brand" href="index.html">
                
                <!-- Logo text -->
                <span class="logo-text ms-2">
                  <!-- dark Logo text -->
                  <img
                    src="../../images/logo.png"
                    alt="homepage"
                    class="light-logo"
                  />
                </span>
                <!-- Logo icon -->
                <!-- <b class="logo-icon"> -->
                <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                <!-- Dark Logo icon -->
                <!-- <img src="../assets/images/logo-text.png" alt="homepage" class="light-logo" /> -->
  
                <!-- </b> -->
                <!--End Logo icon -->
              </a>
              <!-- ============================================================== -->
              <!-- End Logo -->
              <!-- ============================================================== -->
              <!-- ============================================================== -->
              <!-- Toggle which is visible on mobile only -->
              <!-- ============================================================== -->
              <a
                class="nav-toggler waves-effect waves-light d-block d-md-none"
                href="javascript:void(0)"
                ><i class="ti-menu ti-close"></i
              ></a>
            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div
              class="navbar-collapse collapse"
              id="navbarSupportedContent"
              data-navbarbg="skin5"
            >
              <!-- ============================================================== -->
              <!-- toggle and nav items -->
              <!-- ============================================================== -->
              <ul class="navbar-nav float-start me-auto">
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link sidebartoggler waves-effect waves-light"
                    href="javascript:void(0)"
                    data-sidebartype="mini-sidebar"
                    ><i class="mdi mdi-menu font-24"></i
                  ></a>
                </li>
                <!-- ============================================================== -->
                <!-- create new -->
                <!-- ============================================================== -->
                
                <!-- ============================================================== -->
                <!-- Search -->
                <!-- ============================================================== -->
                <li class="nav-item search-box">
                  <a
                    class="nav-link waves-effect waves-dark"
                    href="javascript:void(0)"
                    ><i class="mdi mdi-magnify fs-4"></i
                  ></a>
                  <form class="app-search position-absolute">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search &amp; enter"
                    />
                    <a class="srh-btn"><i class="mdi mdi-window-close"></i></a>
                  </form>
                </li>
              </ul>
              <!-- ============================================================== -->
              <!-- Right side toggle and nav items -->
              <!-- ============================================================== -->
              <ul class="navbar-nav float-end">
                <!-- ============================================================== -->
                <!-- Comment -->
                <!-- ============================================================== -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="mdi mdi-bell font-24"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Notification</a></li>
                    <li><a class="dropdown-item" href="#">Another Notification</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                <!-- ============================================================== -->
                <!-- End Comment -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Messages -->
                <!-- ============================================================== -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    id="2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="font-24 mdi mdi-comment-processing"></i>
                  </a>
                  <ul
                    class="
                      dropdown-menu dropdown-menu-end
                      mailbox
                      animated
                      bounceInDown
                    "
                    aria-labelledby="2"
                  >
                    <ul class="list-style-none">
                      <li>
                        <div class="">
                          <!-- Message -->
                          <a href="javascript:void(0)" class="link border-top">
                            <div class="d-flex no-block align-items-center p-10">
                              <span
                                class="
                                  btn btn-success btn-circle
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                "
                                ><i class="mdi mdi-calendar text-white fs-4"></i
                              ></span>
                              <div class="ms-2">
                                <h5 class="mb-0">Event today</h5>
                                <span class="mail-desc"
                                  >Just a reminder that event</span
                                >
                              </div>
                            </div>
                          </a>
                          
                          <a href="javascript:void(0)" class="link border-top">
                            <div class="d-flex no-block align-items-center p-10">
                              <span
                                class="
                                  btn btn-primary btn-circle
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                "
                                ><i class="mdi mdi-account fs-4"></i
                              ></span>
                              <div class="ms-2">
                                <h5 class="mb-0">Utsao</h5>
                                <span class="mail-desc"
                                  >Just see the my admin!</span
                                >
                              </div>
                            </div>
                          </a>
                          <!-- Message -->
                          
                        </div>
                      </li>
                    </ul>
                  </ul>
                </li>
                <!-- ============================================================== -->
                <!-- End Messages -->
                <!-- ============================================================== -->
  
                <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== -->
                <li class="nav-item dropdown">
                  <a
                    class="
                      nav-link
                      dropdown-toggle
                      text-muted
                      waves-effect waves-dark
                      pro-pic
                    "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/users/1.jpg"
                      alt="user"
                      class="rounded-circle"
                      width="31"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end user-dd animated"
                    aria-labelledby="navbarDropdown"
                  >
                    <a class="dropdown-item" href="profile.html"
                      ><i class="mdi mdi-account me-1 ms-1"></i> My Profile</a
                    >
                    
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="profile.html"
                      ><i class="mdi mdi-settings me-1 ms-1"></i> Account
                      Setting</a
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="authentication-login.html"
                      ><i class="fa fa-power-off me-1 ms-1"></i> Logout</a
                    >
                    <div class="dropdown-divider"></div>
                    <div class="ps-4 p-10">
                      <a
                        href="profile.html"
                        class="btn btn-sm btn-success btn-rounded text-white"
                        >View Profile</a
                      >
                    </div>
                  </ul>
                </li>
                <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== -->
              </ul>
            </div>
          </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar" data-sidebarbg="skin5">
          <!-- Sidebar scroll-->
          <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
              <ul id="sidebarnav" class="pt-4">
                <li class="sidebar-item">
                  <a
                    class="sidebar-link waves-effect waves-dark sidebar-link"
                    href="index.html"
                    aria-expanded="false"
                    ><i class="mdi mdi-view-dashboard"></i
                    ><span class="hide-menu">Dashboard</span></a
                  >
                </li>
                <li class="sidebar-item">
                  <a
                    class="sidebar-link has-arrow waves-effect waves-dark"
                    href="javascript:void(0)"
                    aria-expanded="false"
                    ><i class="mdi mdi-receipt"></i
                    ><span class="hide-menu">Orders </span></a
                  >
                  <ul aria-expanded="false" class="collapse first-level">
                    <li class="sidebar-item">
                      <a href="all-orders.html" class="sidebar-link"
                        ><i class="mdi mdi-note-outline"></i
                        ><span class="hide-menu"> All Orders </span></a
                      >
                    </li>
                    <li class="sidebar-item">
                      <a href="pending-orders.html" class="sidebar-link"
                        ><i class="mdi mdi-note-plus"></i
                        ><span class="hide-menu"> Pending Orders </span></a
                      >
                    </li>
                    <li class="sidebar-item">
                      <a href="total-deliverd.html" class="sidebar-link"
                        ><i class="mdi mdi-note-plus"></i
                        ><span class="hide-menu"> Total Deliverd </span></a
                      >
                    </li>
                    <li class="sidebar-item">
                      <a href="total-failed.html" class="sidebar-link"
                        ><i class="mdi mdi-note-plus"></i
                        ><span class="hide-menu"> Total Failed </span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="sidebar-item">
                  <a
                    class="sidebar-link waves-effect waves-dark sidebar-link"
                    href="products.html"
                    aria-expanded="false"
                    ><i class="mdi mdi-chart-bar"></i
                    ><span class="hide-menu">Products</span></a
                  >
                </li>
                <li class="sidebar-item">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      href="manage-products.html"
                      aria-expanded="false"
                      ><i class="fa fa-tasks" aria-hidden="true"></i>
                      <span class="hide-menu">Add Products</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      href="manage-category.html"
                      aria-expanded="false"
                      ><i class="fa fa-list-alt" aria-hidden="true"></i>
                      <span class="hide-menu">Manage Category</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      href="sub-category-manage.html"
                      aria-expanded="false"
                      ><i class="fas fa-indent" aria-hidden="true"></i>
                      <span class="hide-menu">Manage Sub-Category</span></a
                    >
                  </li>

                  <li class="sidebar-item">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      href="invoice.html"
                      aria-expanded="false"
                      ><i class="fas fa-archive"></i>
                      <span class="hide-menu"> Invoice</span></a
                    >
                  </li>
              </ul>
            </nav>
            <!-- End Sidebar navigation -->
          </div>
          <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
          <!-- ============================================================== -->
          <!-- Bread crumb and right sidebar toggle -->
          <!-- ============================================================== -->
          <div class="page-breadcrumb">
            <div class="row">
              <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Profile</h4>
                <div class="ms-auto text-end">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="products.html">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Profile
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- End Bread crumb and right sidebar toggle -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- Container fluid  -->
          <!-- ============================================================== -->
          <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== -->
            <div class="row ">
              <!-- Column -->
              <div class=" col-md-9 m-auto shadow pt-5 bg-white" >
                <div class="row">
                    <div class="col-sm-4 text-center p-3">
                        <div class="p-image text-center">
                            <img src="../../images/profile-img.gif" height="150px" width="150px" class="img-fluid rounded rounded-circle">
                        </div>
                        <button class="btn btn-primary mt-3">Change Photo</button>
                    </div>
                    <div class="col-sm-8">
                        <form>
                            <div class="form-group form-row">
                                <label for="name" class="col-2">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control shadow-sm" id="name" value="Utsao" required>
                            </div>
                            <div class="form-group form-row">
                                <label for="mobile" class="col-2">Mobile<span class="text-danger">*</span></label>
                                <input type="tel" class="form-control shadow-sm" id="mobile" value="+91 980227**80" required>
                            </div>
                            <div class="form-group form-row">
                                <label for="email" class="col-2">Email<span class="text-danger">*</span></label>
                                <input type="email" class="form-control shadow-sm" id="email" value="Utsao@example.com" required>
                            </div>
                            <div class="form-group form-row">
                                <label for="pwd" class="col-2">Password<span class="text-danger">*</span></label>
                                <input type="password" class="form-control shadow-sm" id="pwd" value="12345678" required>
                            </div>
                            <div class="form-group form-row">
                                <label for="cpwc" class="col-2">Confirm Password<span class="text-danger">*</span></label>
                                <input type="password" class="form-control shadow-sm" id="cpwd" value="12345678" required>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-2"></div>
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</div>
            
  
            <!-- ============================================================== -->
            <!-- End PAge Content -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Right sidebar -->
            <!-- ============================================================== -->
            <!-- .right-sidebar -->
            <!-- ============================================================== -->
            <!-- End Right sidebar -->
            <!-- ============================================================== -->
          </div>      
              
              
          
          
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer text-center">
          
        </footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->
      </div>
      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../assets/extra-libs/sparkline/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="../dist/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="../dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="../dist/js/custom.min.js"></script>

    <!-- This Page JS -->
    
    
  </body>
</html>
