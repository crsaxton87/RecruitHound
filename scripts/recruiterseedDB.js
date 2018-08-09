const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/main");   // Establish connection to database

db.Recruiter.remove(function(err, p) {   // Empty the recruiter model to start brand new, for dev purposes only
  if (err) {
    throw err;
  } else {
    console.log(`Recruiter model emptied!`);
  }
})

const recruiterSeed = [   // Update the collection (aka database) with the recruiter rows below
  {
    prefix: "R",
    recruiting_agency: "Teksystems",
    email: "cp@123.com",
    password: "password",
    street_address1: "200 South College Street",
    unit1: "Suite 1900",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 888-519-0776,
    national: true,
    description: "TEKsystems is an Allegis Group company, the largest private talent management firm in the world. Our longstanding history and industry-leading position speak to our success in providing IT staffing solutions and IT services that empower organizations to actualize ROI and sustain a truly competitive advantage in a fast-changing market.",
    website: "https://www.teksystems.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Aeroteks",
    email: "aeroteks@test.com",
    password: "password",
    street_address1: "16810 Kenton Dr",
    unit1: "Suite 180",
    city1: "Huntersville",
    state1: "NC",
    zip_code1: 28078,
    number1: 888-237-6835,
    national: true,
    description: "Our mission is as simple today as it was thirty plus years ago: Bringing great people and great organizations together. This drive to connect people and make them successful is what we mean when we say â€” our people are everything.",
    website: "https://www.aerotek.com/?ecid=rf_aero_gen_bos-pro_20170113_9b0ef671",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Randstand",
    username: "cp@125.com",
    password: "password",
    street_address1: "201 South College Street",
    unit1: "Suite 2180",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28244,
    number1: 704-347-4627,
    national: true,
    description: "Randstad. we support people and organizations in realizing their true potential and moving them forward.",
    website: "https://www.randstadusa.com/technologies",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Ettain Group",
    username: "cp@126.com",
    password: "password",
    street_address1: "127 West Worthington Ave",
    unit1: "Suite 100",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28203,
    number1: 704-525-5499,
    national: true,
    description: "Ettain group is the Talent Solutions Company that delivers Recruitment Services and Managed Services in IT, Healthcare IT, and Digital Creative. We can deliver an individual with a specific skill set or a large number of resources, under your direction or ours, based on when and how you need them.",
    website: "http://www.ettaingroup.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Vaco",
    username: "vaco@test.com",
    password: "password",
    street_address1: "831 E Morehead St",
    unit1: "Suite 540",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 615-324-8226,
    national: true,
    description: "The Vaco story begins with three rebellious veterans of bureaucratic accounting and staffing mega-conglomerates. Together, they set out to build a new kind of recruiting company: a place where the best and brightest would be free to reach their full potential, and where the most brilliant and passionate outlaws would happily choose to spend their entire careers.",
    website: "https://www.vaco.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Talent Bridge",
    username: "vaco@test.com",
    password: "password",
    street_address1: "6100 Fairview Rd",
    unit1: "Suite 500",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28210,
    number1: 704-644-7000,
    national: true,
    description: "Our company was founded on mutual trust and that trust is something that we never take for granted or put in question. Our committed professional staff is tied in to the top talent in the marketplace. Whether youâ€™re looking for a job or a candidate, we want to get to know you and help you find what you need!",
    website: "https://www.talentbridgeusa.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Signature Consultants",
    username: "signatureconsultants@test.com",
    password: "password",
    street_address1: "200 South College Street",
    unit1: "Suite 1400",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28031,
    number1: 877-453-6723,
    national: true,
    description: "Everything we do at Signature is designed around finding you the right fit in the shortest timeframe.",
    website: "https://www.sigconsult.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "MDI Group of Charlotte",
    username: "mdi@test.com",
    password: "password",
    street_address1: "7421 Carmel Executive Park",
    unit1: "Suite 120",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28226,
    number1: 877-453-6723,
    national: true,
    description: "From security and data consolidation to connectivity and mobility, MDI Group provides the best fit IT consultants and workforce solutions that get projects done.",
    website: "http://www.mdigroup.com/?utm_source=Inavero_Website&utm_campaign=Best_of_Staffing_2018", 
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "The Select Group of Charlotte",
    username: "selectgroup@test.com",
    password: "password",
    street_address1: "550 South Caldwell Street",
    unit1: "Suite 725",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 800-354-2773,
    national: true,
    description: "Eliassen Group delivers strategic consulting and talent solutions that fuel your innovation and business results. We partner with you to marry your business objectives with our expertise, empowering your company to execute business strategy and scale your business effectively and efficiently.",
    website: "https://www.selectgroup.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Matrix of Charlotte",
    username: "matrix@test.com",
    password: "password",
    street_address1: "200 South Tryon Street",
    unit1: "Suite 750",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 800-627-3533,
    national: true,
    description: "Company Info",
    website: "https://www.matrixres.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Insight Global of Charlotte",
    username: "insightglobal@test.com",
    password: "password",
    street_address1: "201 North Tryon Street",
    unit1: "Suite 2150",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 404-257-7900,
    national: true,
    description: "Based in Atlanta, Insight Global is a premier provider of employment solutions to Fortune 500 customers across the United States and Canada. We provide long-term, short-term, temporary-to-permanent, placement staffing, and enhanced staffing services. Since our inception in 2001, we have experienced unprecedented growth within our industry, rapidly expanding from an Atlanta based start-up to one of the most successful staffing firms in America.",
    website: "https://www.insightglobal.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "Automation Personnel Service of Charlotte",
    username: "automationpersonnel@test.com",
    password: "password",
    street_address1: "5939 South Blvd",
    unit1: "",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 205-733-3700,
    national: true,
    description: "We specialize in providing light industrial employees to a variety of customers. In fact, ninety-four percent of our company-wide staffing is light industrial, so our expertise in this field far exceeds that of our competition. Our employees fill needs in plastics manufacturing, electronics manufacturing, warehousing, assembly and production lines for various products, distribution centers, and other labor-intensive needs.",
    website: "http://www.apstemps.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "KellyMitchell Group of Charlotte",
    username: "kellymitchell@test.com",
    password: "password",
    street_address1: "615 South College Street",
    unit1: "",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 877-827-1700,
    national: true,
    description: "As an award-winning, professional services company, we pride ourselves on offering high-quality strategic consulting, staff augmentation and outsourced business solutions to a wide variety of companies, from Fortune 500 corporations to rapidly growing high-tech organizations.",
    website: "http://kellymitchell.com",
    date: new Date(Date.now()),
  },
  {
    prefix: "R",
    recruiting_agency: "The Judge Group of Charlotte",
    username: "judgegroup@test.com",
    password: "password",
    street_address1: "401 North Tryon Street",
    unit1: "",
    city1: "Charlotte",
    state1: "NC",
    zip_code1: 28202,
    number1: 800-650-0035,
    national: true,
    description: "The Judge Group is a privately owned, leading professional services firm with over 48Â years of experience in providing technology, talent, and learning solutions. Our services are successfully delivered through a network of more than 35 offices in the United States,Â Canada, India, and China. The Judge Group serves more than 40 Fortune 100 companies and is responsible for 7,000 professionals on assignment annually across a wide range of industries.",
    website: "https://www.judge.com/?fromUrl=judge.com",
    date: new Date(Date.now()),
  }
];
console.log("About to do the db lines")

  db.Recruiter.insertMany(recruiterSeed)//)
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log("hi")
    console.error(err);
    process.exit(1);
  });

