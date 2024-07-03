import React from "react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-5xl font-bold mt-8">Welcome to Duck World</h1>
        <p className="text-xl mt-4">Discover the fascinating world of ducks.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">About Ducks</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Ducks are waterfowl that are found in both freshwater and seawater. They are known for their distinctive quacking sound and their ability to swim and dive.
              </p>
              <p className="text-lg">
                Ducks have a wide range of habitats, from lakes and rivers to marshes and coastal waters. They are fascinating creatures with a variety of species, each with unique characteristics.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Duck Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p className="mt-2">Duck Species 1</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p className="mt-2">Duck Species 2</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p className="mt-2">Duck Species 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
          <p>&copy; 2023 Duck World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;