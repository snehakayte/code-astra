<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
    request.setAttribute("page", "home");
%>


<%@ include file="header.jsp" %>

<c:set var="context" value="${pageContext.request.contextPath}" />

<!-- Hero Section -->
<!-- Full width gradient background -->
<div class="bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-700 py-28">
  <!-- Constrained content container -->
  <div class="max-w-5xl mx-auto px-6 text-center text-white rounded-lg shadow-xl">
    <h1 class="text-6xl font-extrabold mb-5 drop-shadow-xl tracking-tight leading-tight">
      Welcome to <span class="text-yellow-300">Code Astra Solutions</span>
    </h1>
    <p class="text-2xl mb-8 font-semibold max-w-3xl mx-auto drop-shadow-md leading-relaxed">
      Cutting-edge Full-Stack Development<br class="sm:hidden" />
      Powered by <span class="font-bold">Cloud-Native</span>, <span class="font-bold">Microservices</span>, <span class="font-bold">Event-Driven Architecture</span>, and <span class="font-bold">AI-Enhanced</span> Solutions.
    </p>
    <a href="${context}/appointment" 
       class="inline-block bg-yellow-400 text-indigo-900 font-bold px-12 py-4 rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-105 transition transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300">
      Schedule Your Free Consultation
    </a>
  </div>
</div>




<!-- Services Overview -->
<section class="py-24 bg-white text-center">
  <h2 class="text-4xl font-extrabold text-gray-900 mb-14 tracking-wide drop-shadow-sm">
    Comprehensive Development Services
  </h2>
  <p class="max-w-3xl mx-auto mb-12 text-lg text-gray-700 leading-relaxed">
    Our expert team delivers end-to-end software solutions tailored to your business needs — from scalable backend systems to seamless frontend experiences and cloud infrastructure management. We combine cutting-edge technology with industry best practices to accelerate your digital transformation.
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">

    <div class="bg-indigo-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-indigo-700">Backend & API Development</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Robust, scalable backend systems and RESTful APIs built with Java, Spring Boot, Node.js, and other technologies to power enterprise applications.
      </p>
    </div>

    <div class="bg-purple-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-purple-700">Frontend & UI/UX Design</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Responsive, intuitive, and accessible user interfaces using React, Angular, Vue, and Tailwind CSS — crafted to engage your users effectively.
      </p>
    </div>

    <div class="bg-blue-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-blue-700">Cloud & DevOps Solutions</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Automated deployments, CI/CD pipelines, container orchestration with Kubernetes, and cloud infrastructure management for high availability and scalability.
      </p>
    </div>

    <div class="bg-green-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-green-700">Real-Time Data & Messaging</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Implementation of real-time streaming, event-driven architecture, and messaging systems with Apache Kafka, RabbitMQ, and WebSockets.
      </p>
    </div>

    <div class="bg-yellow-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-yellow-700">Enterprise Integration</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Seamless integration with existing enterprise systems, databases, and third-party APIs to unify your technology landscape.
      </p>
    </div>

    <div class="bg-red-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <h3 class="text-3xl font-bold mb-4 text-red-700">Security & Compliance</h3>
      <p class="text-gray-700 leading-relaxed text-lg">
        Implementing best practices for application security, authentication, authorization, and compliance with industry standards.
      </p>
    </div>

  </div>
  <p class="mt-12 max-w-3xl mx-auto text-lg text-gray-600 italic">
    Backed by a skilled and experienced development team committed to delivering quality, reliability, and innovation for your business success.
  </p>
</section>


<!-- Why Choose Us -->
<section class="py-24 bg-indigo-50 text-center">
  <h2 class="text-4xl font-extrabold text-indigo-800 mb-16 tracking-wide drop-shadow-sm">
    Why Partner with <span class="text-yellow-400">CodeAstra?</span>
  </h2>
  <div class="flex flex-wrap justify-center gap-16 px-6 max-w-6xl mx-auto">
    
    <div class="max-w-sm bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-default">
      <h4 class="text-2xl font-bold mb-3 text-indigo-700">Over 8 Years of Proven Expertise</h4>
      <p class="text-gray-700 text-lg leading-relaxed">
        Delivering scalable, enterprise-grade solutions with deep experience across diverse industries and complex projects.
      </p>
    </div>

    <div class="max-w-sm bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-default">
      <h4 class="text-2xl font-bold mb-3 text-indigo-700">Client-Centric & Transparent</h4>
      <p class="text-gray-700 text-lg leading-relaxed">
        We prioritize your goals with flexible collaboration, transparent communication, and milestone-driven delivery to ensure success.
      </p>
    </div>

    <div class="max-w-sm bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-default">
      <h4 class="text-2xl font-bold mb-3 text-indigo-700">Modern, Future-Ready Tech Stack</h4>
      <p class="text-gray-700 text-lg leading-relaxed">
        Leveraging the latest technologies: Spring Boot, Apache Kafka, Docker & Kubernetes, Cloud-Native architectures, GitHub Actions CI/CD, and AI/ML integrations.
      </p>
    </div>

  </div>
</section>


<!-- About Us Teaser -->
<section class="bg-white py-20 text-center px-6">
  <h2 class="text-4xl font-extrabold text-indigo-800 mb-8 tracking-wide drop-shadow-sm">
    Meet the <span class="text-yellow-400">CodeAstra</span> Team
  </h2>
  <p class="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
    We are a dynamic sibling-led tech duo passionate about crafting innovative, robust Java-based solutions. 
    With over 8 years of combined industry experience, we transform complex challenges into elegant, scalable systems tailored to your business needs.
  </p>
  <a href="${context}/about" 
     class="inline-block text-yellow-500 font-semibold underline hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
    Discover Our Story & Expertise
  </a>
</section>


<!-- Testimonials -->
<section class="bg-indigo-50 py-24 text-center px-6">
  <h2 class="text-4xl font-extrabold text-indigo-800 mb-16 tracking-wide drop-shadow-sm">
    What Our Clients <span class="text-yellow-400">Say About Us</span>
  </h2>
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    
    <blockquote class="bg-white p-8 rounded-3xl shadow-lg text-left hover:shadow-2xl transition-shadow duration-300 cursor-default">
      <p class="text-gray-700 italic text-lg leading-relaxed">
        “CodeAstra transformed our legacy backend into a high-performance, scalable system using the latest Spring Boot and Kafka technologies. Their expertise truly stands out.”
      </p>
      <footer class="mt-6 font-semibold text-indigo-700">– CTO, Leading Fintech Startup</footer>
    </blockquote>
    
    <blockquote class="bg-white p-8 rounded-3xl shadow-lg text-left hover:shadow-2xl transition-shadow duration-300 cursor-default">
      <p class="text-gray-700 italic text-lg leading-relaxed">
        “Highly professional and detail-oriented team. They delivered a seamless Kubernetes deployment faster than we expected, exceeding all quality benchmarks.”
      </p>
      <footer class="mt-6 font-semibold text-indigo-700">– Head of Technology, E-commerce Platform</footer>
    </blockquote>

  </div>
</section>


<!-- Call To Action -->
<section class="py-24 bg-indigo-700 text-white text-center px-6">
  <h2 class="text-5xl font-extrabold mb-8 tracking-wide drop-shadow-md">
    Ready to <span class="text-yellow-400">Elevate Your Project</span> with Us?
  </h2>
  <a href="${context}/contact" 
     class="inline-block bg-yellow-400 text-indigo-900 font-bold px-12 py-4 rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-105 transition transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300">
    Contact Us Now
  </a>
</section>


<%@ include file="footer.jsp" %>
