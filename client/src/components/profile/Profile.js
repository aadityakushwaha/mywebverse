import React from 'react';

const ProfileCard = (props) => {


  const url = `http://localhost:8181/api/v1/${props.role}/me`;
  

  // Make the API request
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify("token")
  })
    .then(response => {
      if (response.status === 200) {
        console.log(response);
      }
    })
    //.then(data => {
    //console.log(data.status);

    // Handle the API response
    //You can do further processing here

    // Store the token and user type in localStorage
    //localStorage.setItem('token', data.token);
    //localStorage.setItem('userType', data.data.userType);

    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  return (
    <div className="w-full  px-4 mx-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-xl rounded-lg mt-16 p-6 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">
                    22
                  </span>
                  <span className="text-sm text-white">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">
                    10
                  </span>
                  <span className="text-sm text-white">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">
                    89
                  </span>
                  <span className="text-sm text-white">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-white mb-2">
              Aditya Kushwaha
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-white mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-white"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-white">
              <i className="fas fa-university mr-2 text-lg text-white"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-black text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-white">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Made with{' '}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notus JS
              </a>{' '}
              by{' '}
              <a
                href="https://www.creative-tim.com"
                className="text-white hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ProfilePage = () => {
  return (
    <section className="pt-16">
      <ProfileCard />
    </section>
  );
};

export default ProfilePage;

