# Netflix-GPT
 - Created a React App --> npx create-react-app netflix-gpt
 - Configuring Tailwind CSS --> ('https://v3.tailwindcss.com/docs/guides/create-react-app')
 - Routing set for components --> npm i -D react-router-dom
 - Formik library -- while using multiple forms in react app for validation (Not used as of now) -> https://formik.org/
 - Components
    - Header
      - Logo
      - Login Button
    - Routing
    - Login page
    - SignUp Page
       - Validation of form
          - for email validation we use rejex --> " /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ "
            rejex has test function for testing the email is valid or not
               for more refer to - https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/
          - for password validation we use rejex --> " /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ "
      - Authentication
         - for authentication we use google firebase which is like a backend to the server
         - we'll hoist our web app on fire base itself
    - useRef hook
    - Firebase setup
    - Project deployment
    - Create Signup user Account
 - After successful sign in or sign up form validation the user info should be stored in redux store with redirecting the user to Home page / Browsing page
      user info is stored in store for future purposeces as we can implement MyWishList... etc
       - Setup REDUX Store
          - Need to install 2 redux libraries
             - reduxjs/toolkit - " npm i -D @reduxjs/toolkit "
             - react-redux - " npm i -D react-redux "
 - useNavigate hook can be used only in the context <Router> component
    - there are multiple ways to use useNavigate hook
       - by directly redirecting which is not much prefered
       - by moving router to outer level i.e, app level so that we can navigate inside the app
       - by changing the usage location of hook i.e, we use navigate when the user is signin / signup, so use the useNavigate hook at the login forms only
 - setting up header component after successful logging in
    - Implement signout feature
    - fixing the bug i.e, navigating into browse page before getting store updated after updating user info using updateProfile api call
    - Fixing another bug that if a user is loged in and he'll redirect to browse pafe if in href link if we remove browse it will automatically redirect to login page
      and if user in login page if they add browse to the link they wll direct to browse page without any credential verification
         - so need to change the navigate control and it should be bind with auth user i.e, acc to the onAuthStateChangedthe navigation should be done. so we'll atach the navigation part in header along with onAuthStateChanged api call
 - Unsubscribing onAuthStateChanged when the header component is unmounted

# Features to build
 - Home Page
 - Login / SignUp page
    - Signin / SignUp form
    - Redirect to Browse page after logging in
 - Browse Page (After authentication)
    - Header
    - Main Movie
       - Trailer in background
       - Title & description
       - Movie suggetions
          - List of Movies (n) -- can vertically scrolable
 - Netflix-GPT
    - Search bar
    - Movie suggetions

# Full forms and random stuff
 - rafce --> React Arrow Fuction Component Export
 - useRef - react hook  used for referencing react tags or fields

# Urls
 - Netflix Logo - https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
 - Netflix Background Image - https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg
 - Netflix Icon - https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico



# Steps to deploy project on firebase
 - install firebase CLI - "npm install -g firebase-tools"
 - login to firebase account - "firebase login"
 - Initialize firebase - "firebase init"
 - select hoisting after initializing
 - build the project - "npm run build"
 - deploy the project - "firebase deploy"



# Important

- useNavigate hook is only used in RouterProvider i.e, in our case in appRouter
    - if we use navigate and RouterProvider at same level we encounter with an error as the navigate function is unaware with routing links so we should use navigate in only RouterProvider or children components of it their children components to get off eith error