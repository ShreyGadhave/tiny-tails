export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#4a4a4a] sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="shadow-sm focus:ring-[#e67e22] focus:border-[#e67e22] block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                placeholder="How can we help you?"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e67e22] hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e67e22]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
