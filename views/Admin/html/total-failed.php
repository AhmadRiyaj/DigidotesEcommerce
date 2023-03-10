<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Utsao</title>
  <!-- Favicon icon -->
  <link rel="icon" type="image/png" sizes="16x16" href="../../images/fav.png" />
  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="../assets/extra-libs/multicheck/multicheck.css" />
  <link href="../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css" rel="stylesheet" />
  <link href="../dist/css/style.min.css" rel="stylesheet" />
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
  <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
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
            <!-- Logo icon -->

            <!--End Logo icon -->
            <!-- Logo text -->
            <span class="logo-text ms-2">
              <!-- dark Logo text -->
              <img src="../../images/logo.png" alt="homepage" class="light-logo" />
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
          <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
              class="ti-menu ti-close"></i></a>
        </div>
        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
          <!-- ============================================================== -->
          <!-- toggle and nav items -->
          <!-- ============================================================== -->
          <ul class="navbar-nav float-start me-auto">
            <li class="nav-item d-none d-lg-block">
              <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)"
                data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a>
            </li>
            <!-- ============================================================== -->
            <!-- create new -->
            <!-- ============================================================== -->

            <!-- ============================================================== -->
            <!-- Search -->
            <!-- ============================================================== -->
            <li class="nav-item search-box">
              <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i
                  class="mdi mdi-magnify fs-4"></i></a>
              <form class="app-search position-absolute">
                <input type="text" class="form-control" placeholder="Search &amp; enter" />
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
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="mdi mdi-bell font-24"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Notification one</a></li>
                <li><a class="dropdown-item" href="#">Another Notification</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
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
              <a class="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="2" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="font-24 mdi mdi-comment-processing"></i>
              </a>
              <ul class="
                    dropdown-menu dropdown-menu-end
                    mailbox
                    animated
                    bounceInDown
                  " aria-labelledby="2">
                <ul class="list-style-none">
                  <li>
                    <div class="">
                      <!-- Message -->
                      <a href="javascript:void(0)" class="link border-top">
                        <div class="d-flex no-block align-items-center p-10">
                          <span class="
                                btn btn-success btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "><i class="mdi mdi-calendar text-white fs-4"></i></span>
                          <div class="ms-2">
                            <h5 class="mb-0">Event today</h5>
                            <span class="mail-desc">Just a reminder that event</span>
                          </div>
                        </div>
                      </a>

                      <a href="javascript:void(0)" class="link border-top">
                        <div class="d-flex no-block align-items-center p-10">
                          <span class="
                                btn btn-primary btn-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "><i class="mdi mdi-account fs-4"></i></span>
                          <div class="ms-2">
                            <h5 class="mb-0">Pavan kumar</h5>
                            <span class="mail-desc">Just see the my admin!</span>
                          </div>
                        </div>
                      </a>

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
              <a class="
                    nav-link
                    dropdown-toggle
                    text-muted
                    waves-effect waves-dark
                    pro-pic
                  " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="profile.html"><i class="mdi mdi-account me-1 ms-1"></i> My Profile</a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="profile.html"><i class="mdi mdi-settings me-1 ms-1"></i> Account
                  Setting</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="authentication-login.html"><i class="fa fa-power-off me-1 ms-1"></i>
                  Logout</a>
                <div class="dropdown-divider"></div>
                <div class="ps-4 p-10">
                  <a href="profile.html" class="btn btn-sm btn-success btn-rounded text-white">View Profile</a>
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
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i
                  class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)"
                aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Orders </span></a>
              <ul aria-expanded="false" class="collapse first-level">
                <li class="sidebar-item">
                  <a href="all-orders.html" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span
                      class="hide-menu"> All Orders </span></a>
                </li>
                <li class="sidebar-item">
                  <a href="pending-orders.html" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span
                      class="hide-menu"> Pending Orders </span></a>
                </li>
                <li class="sidebar-item">
                  <a href="total-deliverd.html" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span
                      class="hide-menu"> Total Deliverd </span></a>
                </li>
                <li class="sidebar-item">
                  <a href="total-failed.html" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span
                      class="hide-menu"> Total Failed </span></a>
                </li>
              </ul>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="products.html" aria-expanded="false"><i
                  class="mdi mdi-chart-bar"></i><span class="hide-menu">Products</span></a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="manage-products.html"
                aria-expanded="false"><i class="fa fa-tasks" aria-hidden="true"></i>
                <span class="hide-menu">Add Products</span></a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="manage-category.html"
                aria-expanded="false"><i class="fa fa-list-alt" aria-hidden="true"></i>
                <span class="hide-menu">Manage Category</span></a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="sub-category-manage.html"
                aria-expanded="false"><i class=" fas fa-indent" aria-hidden="true"></i>
                <span class="hide-menu">Manage Sub-category</span></a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="invoice.html" aria-expanded="false"><i
                  class="fas fa-archive"></i>
                <span class="hide-menu"> Invoice</span></a>
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
            <h4 class="page-title">Total Failed Orders</h4>
            <div class="ms-auto text-end">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="all-orders.html">Orders</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Total-failed
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
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Failed Orders list</h5>
                <div class="table-responsive">
                  <table id="zero_config" class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th>Order date</th>
                        <th>Price</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiger</td>
                        <td>Samsung laptop E-456</td>
                        <td>East delhi</td>
                        <td>Failed</td>
                        <td>61</td>
                        <td>2021/04/25</td>
                        <td>???320,800</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>dell inspirion N5559</td>
                        <td>west delhi</td>
                        <td>Failed</td>
                        <td>63</td>
                        <td>2021/07/25</td>
                        <td>???70,750</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Refurbished realme note 9</td>
                        <td>west delhi</td>
                        <td>Failed</td>
                        <td>66</td>
                        <td>2021/01/12</td>
                        <td>???6,000</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Book computer Operating system</td>
                        <td>north delhi</td>
                        <td>Failed</td>
                        <td>22</td>
                        <td>2021/03/29</td>
                        <td>???330</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Airi Satou</td>
                        <td>refurbished Samsung m42 mobile</td>
                        <td>south delhi</td>
                        <td>Failed</td>
                        <td>33</td>
                        <td>2020/11/28</td>
                        <td>???16,700</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Brielle Williamson</td>
                        <td>Dell inspirion N5110 Laptop</td>
                        <td>East delhi</td>
                        <td>Failed</td>
                        <td>61</td>
                        <td>2021/12/02</td>
                        <td>???72,000</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Herrod Chandler</td>
                        <td>redmi note 7</td>
                        <td>west delhi</td>
                        <td>Failed</td>
                        <td>59</td>
                        <td>2012/08/06</td>
                        <td>???13,500</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Rhona Davidson</td>
                        <td>Refurbished desktop dell kb-11021</td>
                        <td>east delhi</td>
                        <td>Failed</td>
                        <td>55</td>
                        <td>2020/10/14</td>
                        <td>???32,900</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Colleen Hurst</td>
                        <td>Book elementry</td>
                        <td>Gurugram</td>
                        <td>Failed</td>
                        <td>23</td>
                        <td>2021/09/15</td>
                        <td>???205</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Sonya Frost</td>
                        <td>Oppo f7 Mobile</td>
                        <td>Delhi</td>
                        <td>Failed</td>
                        <td>23</td>
                        <td>2021/12/13</td>
                        <td>???10,600</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Jena Gaines</td>
                        <td>Girls uniform</td>
                        <td>UP</td>
                        <td>Failed</td>
                        <td>30</td>
                        <td>2021/12/19</td>
                        <td>???900</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Quinn Flynn</td>
                        <td>Printer q-77</td>
                        <td>Bahadurgarh</td>
                        <td>Failed</td>
                        <td>22</td>
                        <td>2020/03/03</td>
                        <td>???14,000</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Charde Marshall</td>
                        <td>Refurbished lenovo laptop s510</td>
                        <td>Gaziabad</td>
                        <td>Failed</td>
                        <td>36</td>
                        <td>2019/10/16</td>
                        <td>???40,600</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Haley Kennedy</td>
                        <td>Cello Pen set</td>
                        <td>delhi</td>
                        <td>Failed</td>
                        <td>43</td>
                        <td>2021/12/18</td>
                        <td>???313</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Tatyana Fitzpatrick</td>
                        <td>Table pen stand</td>
                        <td>Faridabad</td>
                        <td>Failed</td>
                        <td>19</td>
                        <td>2021/03/17</td>
                        <td>???385</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Michael Silva</td>
                        <td>Sandisk 64GB pendrive</td>
                        <td>east delhi</td>
                        <td>Failed</td>
                        <td>55</td>
                        <td>2019/11/27</td>
                        <td>???499</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Paul Byrd</td>
                        <td>Limac card reader 3.0</td>
                        <td>west delhi</td>
                        <td>Failed</td>
                        <td>64</td>
                        <td>2019/06/09</td>
                        <td>???120</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Gloria Little</td>
                        <td>LUMINOUS LB1000 PRO LB1000 UPS</td>
                        <td>New Delhi</td>
                        <td>Failed</td>
                        <td>59</td>
                        <td>2021/04/10</td>
                        <td>???5,000</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>
                      <tr>
                        <td>Bradley Greer</td>
                        <td>LUMINOUS LB1000 PRO LB1000 UPS</td>
                        <td>New Delhi</td>
                        <td>Failed</td>
                        <td>59</td>
                        <td>2021/04/10</td>
                        <td>???5,000</td>
                        <td><a href="invoice.html">Invoice</a></td>
                      </tr>



                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th>Order date</th>
                        <th>Price</th>
                      </tr>
                    </tfoot>
                  </table>
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
      <!-- End Container fluid  -->
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
  <!-- this page js -->
  <script src="../assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
  <script src="../assets/extra-libs/multicheck/jquery.multicheck.js"></script>
  <script src="../assets/extra-libs/DataTables/datatables.min.js"></script>
  <script>
    /****************************************
     *       Basic Table                   *
     ****************************************/
    $("#zero_config").DataTable();
  </script>
</body>

</html>