


export default function Home() {
    return (
        
        <section id="home" className="welcome-hero">

            <div className="top-area">
                <div className="header-area">

                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div className="container">


                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">car dealership<span></span></a>

                            </div>

                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className=" scroll active"><a href="#home">home</a></li>
                                    <li className="scroll"><a href="#service">catalogue</a></li>
                                    <li className="scroll"><a href="#featured-cars">search</a></li>
                                    <li className="scroll"><a href="#new-cars">login</a></li>
                                    <li className="scroll"><a href="#brand">register</a></li>
                                    <li className="scroll"><a href="#contact">logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="clearfix"></div>

            </div>

            <div className="container">
                <div className="welcome-hero-txt">
                    <h2>get your desired car in resonable price</h2>
                    <p>
                        Have a car for sele? 
                    </p>
                    <button className="welcome-btn" href='#'>Make a offer</button>
                </div>
            </div>

          

        </section>

       

       
    );
}