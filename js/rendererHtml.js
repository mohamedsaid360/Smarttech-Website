function renderHeader(currentPage) {


  var SmarttechHeader = `
    <div class="container">
    <nav>
      <div class="logo">
      <a href="../index.html">
        <img
        class="normal-logo"
        src="../assets/images/smart-tech.png"
        alt="logo"
      />
      <img
        class="no-word-logo"
        src="../assets/images/smart-tech-no-word.png"
        alt="logo"
      />
      </a>
      </div>
      <div class="toggle-button d-lg-none" onclick="openNav()">
        <span style="font-size: 30px; cursor: pointer">&#9776;</span>
      </div>

      <ul id="mySidenav">
        <li><a class="active" href="../index.html"> Home</a></li>
        <li><a href="${currentPage == 'about' ? './about.html' : '#'}"> About</a></li>
        <li><a  href="${currentPage == 'services' ? './services.html' : '#'}"> Services</a></li>
        <li><a  href="${currentPage == 'products' ? './products.html' : '#'}"> Products</a></li>
        <li><a  href="${currentPage == 'team' ? './team.html' : '#'}"> Team</a></li>
        <li><a  href="${currentPage == 'contactUs' ? './contactUs.html' : '#'}"> Contact us</a></li>
      </ul>
    </nav>
  </div>
    `;
  document.getElementById("SmarttechHeader").innerHTML = SmarttechHeader;
}


function rendererFooter(params) {
  var SmarttechFooter = `
  <div class="f-leading">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <p>@Copyrights SmartTech 2021</p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h2>SERVICES</h2>
        <div class="map-list">
          <ul>
            <li><a href="./services.html">Our services</a></li>
            <li>
              <a href="./softwareDevelopment.html">
                Software Development
              </a>
            </li>
            <li>
              <a href="./consultaionsServices.html">
                Consultation services</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h2>PRODUCTS</h2>
        <div class="map-list">
          <ul>
            <li>
              <a href="#" onclick="goToProductDetails('0')"
                >Asset Management</a
              >
            </li>
            <li>
              <a href="#" onclick="goToProductDetails('8')"
                >Warehouse Management</a
              >
            </li>
            <li>
              <a href="#" onclick="goToProductDetails('2')"
                >Tag Parking RFID
              </a>
            </li>
            <li>
              <a href="#" onclick="goToProductDetails('4')"
                >E-Learning and Exam engine</a
              >
            </li>
            <li>
              <a href="./products.html"> Show More.. </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h2>Links</h2>
        <div class="map-list">
          <ul>
            <li>
              <a href="./outsourcingService.html"> Outsourcing </a>
            </li>
            <li>
              <a href="./team.html"> Team </a>
            </li>
            <li>
              <a href="./contactUSForm.html"> Contact Us </a>
            </li>
            <li>
              <a href="./applyForJob.html"> Apply For Job </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="tail">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <p> About | Terms & Conditions | Privacy Policy | Blog </p>
      </div>
      <div class="col-lg-6 col-md-12">
        <ul>
          <li>
            <a href="https://www.facebook.com/SmartTech-626073627527285" target="_blank" rel="noopener noreferrer"
              ><img src="../assets/icons/facebook.png" alt=""
            /></a>
          </li>

          <li>
            <a  rel="noopener noreferrer"
              ><img src="../assets/icons/twitter.PNG" alt=""
            /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/smart-tech-sys/" target="_blank" rel="noopener noreferrer"
              ><img src="../assets/icons/linkedin.PNG" alt=""
            /></a>
          </li>
          <li>
            <a  rel="noopener noreferrer"
              ><img src="../assets/icons/p.PNG" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `;
  document.getElementById("SmarttechFooter").innerHTML = SmarttechFooter;

}




function setProductDetailsInnerHTML() {

  var projectId = localStorage.getItem("projectId");

  let productsList = [
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "RFID Assets Management",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `No more need to a huge number of security guards to secure your organization’s properties, all you need is Asset Management RFID Solution. It is the safest way to secure assets in/ out of your company. Organization’s properties are all managed and monitored with no effort in a very secure environment.
    `,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Each asset within the organization is attached with RFID tag.
      RFID Readers installed in each location in the company to capture RFID tags.      
      Assets’ location is monitored in the system      
      Once any asset gets out of the company, an alarm flashes in the system.`,
      benefits: ` Provides total assets visibility. Improves assets utilization
      Improves accuracy and efficiency. Provides higher-level
      security. Reduces costs. Increases Return on Investment (ROI).`

    },
    {
      productDetailsPannerImage: "WCTS.png",
      productDetailsPanner_H3: "Waste Collection Tracking System (WCTS)",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `No more need to a huge number of security guards to secure your organization’s properties, all you need is Asset Management RFID Solution. It is the safest way to secure assets in/ out of your company. Organization’s properties are all managed and monitored with no effort in a very secure environment.
      `,
      projectImages: [
        "WCTS_slider1.jpg",
        "WCTS_slider1.jpg",
        "WCTS_slider1.jpg",
      ],
      howItWorks: `WCTS provides customer full optimization of drivers’ routes, number of bins/ route and facilitates empty collection process. GPS supported in driver’s vehicle guides the driver accurately along the specified route.`,
      benefits: `Having a waste free district or even a town now, is not a dream. WCTS tracking system compared to a tradition It offers you collecting waste in an efficient, robust, reliable, safe, tracked vehicle and waste bins. Want to have a reliable fully monitoring and tracking waste collection system; WCTS is the best solution for you.al waste collection companies can save you both time and money

      On-board computer in vehicle supports communication between vehicle and office ; which improves waste collection process for the driver.`
    },
    {
      productDetailsPannerImage: "WCTS.png",
      productDetailsPanner_H3: "Tag Parking RFID Solution",
      productDetailsPanner_P: "Tag Parking RFID Solution provides independent system for security, parking",
      projectDescription: `Tag Parking RFID Solution provides independent system for security, parking, and access control. This would provide businesses with hands-free control to ensure only authorized vehicles have entry.

      Tag Parking RFID Solution helps user to reduce the wasted time of search parking lot and also improves the parking lot utilization.
      
      The system can also provide access data for administering periodic access charges or parking fees. `,
      projectImages: [
        "WCTS_slider1.jpg",
        "WCTS_slider1.jpg",
        "WCTS_slider1.jpg",
      ],
      howItWorks: `Each car is labeled with an RFID tag that is captured by RFID reader.

      A user may use a card which is read by RFID reader.
      
      User charges park fees periodically; which are going to be registered either on car label or card.
      
      The system automatically captures data from car label or by passing the card on RFID reader
      
      Each access can be recorded in the RFID reader.
      
      System maintains a history of access activities and administrative billing of daily, weekly, or monthly fees.`,
      benefits: `​Automatic hands free access control into and out of parking lot

      Automatic & fast processing of parking fees based on different categories of users.
      
      Elimination of human intervention at entry and exit points.
      
      Automatic notification when a car enters or leaves the lot.
      
      Real time parking status updates.
      
      Increases customer safety and security.
      
      Improves service offered.`
    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "AVL-Automatic Vehicle Location Tracking System",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `The GPS based location-tracking system for vehicle. This solution is designed to enable the vehicle owner to track the movement of his vehicle, using a special device installed onboard to grant him complete Return on Investment and peace of mind. It is the most efficient and effective Tracking Technology available in the present scenario. `,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Business Automatic Vehicle Location is vehicle tracking and fleet management system where customers can track their vehicles, as well as determine their positions and track via GPS, GSM and 3G technologies. The data transfer from tracking devices are installed in the vehicles and linked to tracking system servers through 3G and GPRS, which reflects on digital maps where the fleet manager can access them via the service website, as well as being kept informed about the fleet status by SMS notifications. This will allow him to manage and control the fleet easily, and therefore help the enterprise to reduce the operational costs of vehicles and increase the performance and productivity of the workers and customer's satisfaction as well as drivers and fleet safety.`,
      benefits: ` Tracks of vehicles on the mapPlayback of tracksFixed or Dynamic Routing CapabilitiesReal-Time VisibilityIndustry FlexibilityReal-Time VisibilityAdvanced ReportingTire ManagementFuel ManagementDrivers Management`

    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "E-Learning and Exam engine system",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `This system is designed as presentations processor designed using "Microsoft PowerPoint" presentations into an interactive Web site to the possibility of easily displayed on all devices and browsers and smart phones and tablet computers.`,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `The system is also designed to facilitate the examination process with the ability to determine the levels of the difficulty and to identify areas of examinations with different proportions to determine the minimum rate of success or failure and display the final results. Also it working on building questions bank to allow the user to design exam with the possibility of determining the properties of the exam or issue a random test quizzed difficult to track shall be the test for individuals in different each time while maintaining the difficult questions ratios and diversity.`,
      benefits: `The registration Module: this is the module that works on helping users to register themselves as instructors \ student \ examinees to the system.

       Knowledge areas manager: this module allow the system administrator to specify various educational domains that will underlie the system
      
       Educational Tracks Manager: that is to allow a teacher selects educational tracks to be provided for learners and determine the value of the physical and link them to one or more educational and processor tests.
      
       Presentation Processor Module: that is to allow the instructors to upload educational presentations "PPT" files or "PPTX" or various video or audio files and determine if it is
      
       Questions Bank Module: that is to allow the instructor to add questions to the system and link them to a specific domain of education with ability to determine the difficulty of the extent of each question and answers available and any of the answers is correct and what is incorrect. With the possibility of adding multiple correct answers varying accuracy is different. And the instructor can also upload a large number of questions by excel files
      
       Exam Engine Module: this module allow the users to design various exam settings, to allow the engine to randomly generate questions with various difficulty based on the settings.
      
       Exam Viewer: that is the module responsible to allow the examinee to take the exam, navigate through the exam questions, with ability to mark question for review, and finally display the result.
      
       Content Management – CMS: this module allow the system administrators to define various contents such as files, pages and customize the whole system menu, UI, etc…`

    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "Card Issuing System create and design cards",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `It is the safest way to secure assets in/ out of your company. Organization’s properties are all managed and monitored with no effort in a very secure environment.`,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Using ID Studio it will be very easy to create and design cards according to your needs with smart graphical user interface support a lot of item types with its proper properties like font, alignment, rotation, back color ....`,
      benefits: `User friendly interface.
      Card Face and Back Design.    
      Supports different types (Text, Barcode, Image, Circle, Rectangle…).     
      Generate card database.      
      Supports different types of database engine (SQL, Oracle, Access ….)  Dynamic Data Entry Screens based on the card fields Single card printing.
Batch printing.
System users management Reports Image Capture Image Enhancement Remote database connection    
      `

    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "Indoor Tracking RFID System",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `Whatever you want to track in a defined area; you can do using Indoor Tracking RFID solution. You can track a visitor in your company using a card, or track a child in a park using a bracelet or track equipment within a field of work; all is possible.`,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `RFID reader captures last transaction done with RFID card, RFID label or RFID bracelet.

      All transactions are recorded in the system.By knowing last transaction; you can reach the target object
      
      Object’s location is tracked and monitored in the system.`,
      benefits: `Trace & track target object.

      Track object by knowing its specified location.
      
      Provide high level security.
      
      Reduce human intervention.`

    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "Student Attendance System",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `RFID Smart Card Based application for School, University or Company.
      Being a web enabled service; it can be accessed from anywhere which helps each individual to be in touch. Parent can log from his mobile or web to check on his child.
      Student’s Bus is supplied with hand held to capture Student RFID tag from Student’s Card or Student’s bracelet (in case of being a kid).
      Gates are supplied with readers to capture Bus RFID label.`,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Whole school attendance can be taken within less than 60 seconds via wireless attendance system. As soon as Student enters the School gate and the device reads card data, automatic SMS is sent to Parent.`,
      benefits: `Reduce administrative cost and workload. Trace student attendance. Improve service via online accessibility. Automatic SMS facility to Parents.`

    },
    {
      productDetailsPannerImage: "AssetsManagementPanner.png",
      productDetailsPanner_H3: "Warehouse Management RFID Solution",
      productDetailsPanner_P: "Smart Tech is proud to offer you the following product",
      projectDescription: `Save time and enhance your stock control measures using Stock Control RFID Solution. Now it’s no more need for product movement, scanning or human involvement; we supply you with a fully automated system that allows inventory status to be determined and generated automatically. Our fully automated system allows stock control status to be determined and generated automatically.`,
      projectImages: [
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png",
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Attachment of RFID tags to goods. Use of fixed and handheld RFID readers to determine goods' locations as they are received at inventory. RFID Readers installed in gates to capture RFID tags on containers in/ out of inventory Goods’ location is tracked and monitored in the system.`,
      benefits: ` Track, locate, and manage inventory wherever it is. Larger operations, with multiple locations are improved. Improves products visibility and utilization. Gives full stock management. Allows monitoring inventory-stocking levels. Provides full process control for products. Provides higher-level security. Improves accuracy and efficiency. Reduces human errors. Reduces overall operations costs. Increase Return on Investment (ROI).`

    },
    {
      productDetailsPannerImage: "irobo_Panner.jpg",
      productDetailsPanner_H3: "IRobot",
      productDetailsPanner_P: "iRobo is offering Cognitive RPA across banking, insurance, and telecom industry.",
      projectDescription: `Is a Unique tool that can drive unattended automation to scale across the businesses by connecting process workflows to Enterprise applications that have very high or fluctuating volumes and on several instances.`,
      projectImages: [
        "AssetsManagementSlider1.png"
      ],
      howItWorks: `Customer Support Automation with iRobo,Computer Vision Demo with iRobo,HR Process Automation with iRobo,Payroll automation with iRobo`,
      benefits: `Intelligent Invoice Processing with iRobo, `

    }
    ,
    {
      productDetailsPannerImage: "convoAI_Panner.jpg",
      productDetailsPanner_H3: "IRobot",
      productDetailsPanner_P: "Convo.Ai is an interactive conversational AI serving across Banking, Insurance and Capital Markets",
      projectDescription: `Automated technology can provide a deep analysis of the needs and wants of the general public for a better connection with probable customers.`,
      projectImages: [
        "convoAI_slider.jpg",
        "convoAI_slider2.jpg",
        "convoAI_slider3.jpg",
      ],
      howItWorks: `Customers can heave a sigh of relief as a smart virtual assistant will remind them of outstanding balances, upcoming bills, etc, to avoid penalties`,
      benefits: `Convo.Ai provides the persuasion capabilities of humans without the setbacks by presenting better options tailored to the customer’s profile. Consumers lack interest in tedious form-filling to provide information, this problem is countered by active chat support offered by AI BotsوConversational User Interface solves the problem of formal transaction processes so users can get similar to interacting with another person. Virtual assistance offered by technological feats of automation help to showcase empathy and emotion for a better interactive experience.`

    }
    ,
    {
      productDetailsPannerImage: "cube_Panner.jpg",
      productDetailsPanner_H3: "Smart Club",
      productDetailsPanner_P: "Commitment is the little choices every day that lead to the final results we're striving for.",
      projectDescription: `Save time and enhance your stock control measures using Stock Control RFID Solution. Now it’s no more need for product movement, scanning or human involvement; we supply you with a fully automated system that allows inventory status to be determined and generated automatically. Our fully automated system allows stock control status to be determined and generated automatically.`,
      projectImages: [
        "cube_slider.jpg",
        "cube_slider.jpg",
        "cube_slider.jpg"
      ],
      howItWorks: `CUBE specializes in identification technologies, security solutions, RFID solutions, surveillance systems, and safeguarding.`,
      benefits: `10X Faster Turnaround time. 50% Cost Savings. 99% Error Reduction`

    }





  ]
  var xx = productsList[projectId];
  debugger

  // ----- product Details Panner ---------
  var productDetailsPanner = document.querySelector('#productDetailsPanner');
  var productDetailsPanner_H3 = document.querySelector('#productDetailsPanner h3');
  var productDetailsPanner_P = document.querySelector('#productDetailsPanner p');
  productDetailsPanner.style.backgroundImage = `url('../assets/images/products-images/${productsList[projectId].productDetailsPannerImage}')`;
  productDetailsPanner_H3.innerHTML = productsList[projectId].productDetailsPanner_H3;
  productDetailsPanner_P.innerHTML = productsList[projectId].productDetailsPanner_P;
  // ----- product Project description ---------
  document.querySelector('#projectDecription p').innerHTML = productsList[projectId].projectDescription;


  // -----   Project carousel ---------
  var carouselInnerHTML = ``;
  var carouselIndicatorHTML = ``;

  for (let i = 0; i < productsList[projectId].projectImages.length; i++) {
    debugger
    var carouselItem = `
    <div class="carousel-item ${i == 0 ? "active" : ""}">
    <img
      class="d-block w-100"
      src="../assets/images/products-images/${productsList[projectId].projectImages[i]}"
      alt="First slide"
    />
    </div>  
    `;
    debugger
    var indicator = `
    <li
    data-target="#projectCarouselPhotos"
    data-slide-to=${i}
    class="${i == 0 ? "active" : ""}"
  ></li>
    `
    carouselInnerHTML += carouselItem;
    carouselIndicatorHTML += indicator;

  }
  document.querySelector('#projectCarouselPhotos .carousel-inner').innerHTML = carouselInnerHTML;
  document.querySelector('#projectCarouselPhotos .carousel-indicators').innerHTML = carouselIndicatorHTML;

  // -----   Project how it works ---------
  document.querySelector('.how-it-works .col-lg-6:nth-of-type(1) p').innerHTML = productsList[projectId].howItWorks;
  document.querySelector('.how-it-works .col-lg-6:nth-of-type(2) p').innerHTML = productsList[projectId].benefits;



}


function renderSmarttechTeam() {

  let teamList = [
    {
      name: "Wael Kamel",
      role: "CEO",
      photo: "Wael Kamel.jpg"
    },
    {
      name: "Hossam Kamel",
      role: "Business Development Manager",
      photo: "Hossam Kamel.JPG"
    },
    {
      name: "Hadeer Said",
      role: "Technical Project Manager",
      photo: "hadeer said.jpeg"
    },
    {
      name: "Ahmed Shaikoun",
      role: "Team Leader",
      photo: "Ahmed Shaikoun.jpg"
    }
    ,
    {
      name: "Mohamed Elkadosy",
      role: "Senior Software Developer",
      photo: "Mohamed Elkadosy.jpg"
    },
    {
      name: "Ahmed Emad",
      role: "Senior Software Developer",
      photo: "Ahmed Emad.jpg"
    },
    {
      name: "Samar Karem",
      role: "HR & Admin Manager",
      photo: "Samar Karem.jpg"
    },
    {
      name: "Amr Gomaa",
      role: "Team Leader",
      photo: "Amr Gomaa.jpg"
    },
    {
      name: "Ahmed Hegazy",
      role: "Senior Software Developer",
      photo: "Ahmed Hegazy.jpg"
    },

    {
      name: "Mahmoud Adnan",
      role: "Senior Mobile Developer",
      photo: "Mahmoud Adnan.jpg"
    },

    {
      name: "Mohamed Hagag",
      role: "Senior Software Developer",
      photo: "Mohamed Hagag.jpg"
    },

    {
      name: "Mina Adel",
      role: "Senior Software Developer",
      photo: "Mina Adel.jpg"
    },

    {
      name: "Karim Karem",
      role: "IT Engineer",
      photo: "Karim Karem.JPG"
    },

    {
      name: "Mostafa Sobhy",
      role: "Senior Software Developer",
      photo: "Mostafa Sobhy.jpg"
    },

    {
      name: "Rania Sobhy",
      role: "QC Engineer",
      photo: "Rania Sob7i.jpeg"
    },

    {
      name: "Sara Sherif",
      role: "Software Developer",
      photo: "Sara Sherif.jpeg"
    },

    {
      name: "Mohamed Hamza",
      role: "Software Developer",
      photo: "Mohamed Hamza.jpg"
    },

    {
      name: "AbdelRahman Ahmed",
      role: "Software Developer",
      photo: "AbdelRahman Ahmed.jpeg"
    } ,

    {
      name: "Mahmoud Maher",
      role: "Software Developer",
      photo: "Mahmoud Maher.jpg"
    },

    {
      name: "AbdelRahman Salah",
      role: "Mobile Developer",
      photo: "AbdelRahman Mohamed Salah.jpg"
    },

    {
      name: "Osama AlBanna",
      role: "Software Developer",
      photo: "Ousama Elbana.jpg"
    }
  ]

  HTMLCards = ``;

  for (let i = 0; i < teamList.length; i++) {
    var memberCard = `  <div class="col-lg-3 col-md-6 col-sm-12 animate" >
     <div class="team-card">
       <div class="member-image">
         <img src="../assets/images/team-Photos/${teamList[i].photo}" alt="${teamList[i].name}" />
       </div>
       <h5>${teamList[i].name}</h5>
       <h6>${teamList[i].role}</h6>
     </div>
   </div>`
    HTMLCards += memberCard;
  }
  document.querySelector("#teamCards").innerHTML = HTMLCards;
}

