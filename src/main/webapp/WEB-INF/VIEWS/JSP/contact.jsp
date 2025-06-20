<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    request.setAttribute("page", "contact");
%>
<%@ include file="header.jsp" %>

<section class="bg-gray-50 min-h-screen flex items-center justify-center py-20 px-6">

  <div class="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-12"
       data-aos="fade-up"
       data-aos-delay="100"
       >
    <h1 class="text-4xl font-extrabold text-indigo-700 mb-8 text-center">Let's discuss your needs</h1>
    
    <form action="/codeastra/contact-submit" method="post" class="space-y-6">
      
      <!-- Full Name -->
        <div class="relative z-0 w-full mb-5 group">
    <input type="text" name="fullname" id="fullname"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
           placeholder=" " required />
    <label for="fullname"
           class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:scale-75 peer-focus:-translate-y-6
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-gray-400">
      Full Name
    </label>
  </div>
      
       <!-- Email -->
      <div class="relative z-0 w-full mb-5 group">
    <input type="email" id="appt-email" name="email"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
           placeholder=" " required />
    <label for="appt-email"
           class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:scale-75 peer-focus:-translate-y-6
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-gray-400">
       Email Address
    </label>
  </div>
      
      <!-- Message -->
      <div class="relative">
        <textarea id="message" name="message" required rows="5"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                  placeholder=" "></textarea>
        <label for="message"  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:scale-75 peer-focus:-translate-y-6
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-gray-400">
          Kindly describe your request.
        </label>
      </div>
      
      <!-- Submit -->
      <button type="submit" 
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition">
        Send Message
      </button>
    </form>
  </div>

</section>

<%@ include file="footer.jsp" %>
