<%
    request.setAttribute("page", "about");
%>

<%@ include file="header.jsp" %>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

<!-- Page Banner -->
<div data-aos="fade-up" data-aos-delay="200" class="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 text-white py-20 px-6 text-center shadow-lg">
  <h1 class="text-5xl font-extrabold tracking-tight drop-shadow-md">
    About <span class="text-yellow-400">CodeAstra</span>
  </h1>
  <p class="text-xl mt-4 max-w-3xl mx-auto font-semibold drop-shadow-sm">
    Your Trusted Freelance Partners for Scalable, Modern Java & Enterprise Solutions
  </p>
</div>

<!-- Team Overview -->
<section class="py-20 px-6 bg-white text-center">
  <h2 class="text-4xl font-extrabold mb-6 text-indigo-800">Who We Are</h2>
  <p class="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
  CodeAstra is a tech-driven freelancing duo with 8+ years of experience delivering scalable, cloud-native solutions.  
  We specialize in modern backend development, microservices, containerization, and DevOps automation.  
  Our expertise includes Spring Boot, reactive programming, Docker, Kubernetes, and CI/CD pipelines — ensuring high-performance, reliable applications tailored to your needs.
</p>

</section>


<!-- Member Profiles -->
<section class="py-12 bg-gray-50 px-6">
  <h2 class="text-3xl font-bold text-center mb-12 text-indigo-700">Meet the Team</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

    <!-- Sneha -->
    <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
      <img src="assets/sister.jpg" alt="Sneha Abhishek Mathankar" class="w-32 h-32 mx-auto rounded-full mb-5 border-4 border-indigo-300 object-cover">
      <h3 class="text-2xl font-semibold mb-1 text-indigo-800">Sneha Abhishek Mathankar</h3>
      <p class="text-gray-600 font-medium mb-3">Senior Java Developer | 8+ Years Experience</p>
      <p class="text-gray-500 text-sm leading-relaxed">
        Master of scalable cloud-native solutions using Spring Boot, Reactive Programming, Microservices architecture, Docker, Kubernetes, Kafka, and advanced CI/CD pipelines.
      </p>
    </div>

    <!-- Roshan -->
    <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300 sm:col-span-2 lg:col-span-1">
      <img src="assets/roshan.jpg" alt="Roshan Nandeshwar" class="w-32 h-32 mx-auto rounded-full mb-5 border-4 border-indigo-300 object-cover">
      <h3 class="text-2xl font-semibold mb-1 text-indigo-800">Roshan Nandeshwar</h3>
      <p class="text-gray-600 font-medium mb-3">Senior Backend Engineer | 7+ Years Experience</p>
      <p class="text-gray-500 text-sm leading-relaxed">
        Expert in microservices, event-driven architecture, cloud deployments (AWS/GCP), Docker, Kubernetes, and automation with Terraform and Jenkins.
      </p>
    </div>
    
    <!-- Pratik -->
    <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
      <img src="assets/pratik.jpg" alt="Pratik Dilip Kayte" class="w-32 h-32 mx-auto rounded-full mb-5 border-4 border-indigo-300 object-cover">
      <h3 class="text-2xl font-semibold mb-1 text-indigo-800">Pratik Dilip Kayte</h3>
      <p class="text-gray-600 font-medium mb-3">Backend Developer | 2+ Years Experience</p>
      <p class="text-gray-500 text-sm leading-relaxed">
        Focused on robust backend systems with Java, Spring Boot, JPA/Hibernate, RESTful APIs, and fintech domain expertise with strong problem-solving skills.
      </p>
    </div>

    <!-- Tushar -->
    <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
      <img src="assets/tushar.jpg" alt="Tushar Bhojiram Mule" class="w-32 h-32 mx-auto rounded-full mb-5 border-4 border-indigo-300 object-cover">
      <h3 class="text-2xl font-semibold mb-1 text-indigo-800">Tushar Bhojiram Mule</h3>
      <p class="text-gray-600 font-medium mb-3">Full-Stack Developer | 2+ Years Experience</p>
      <p class="text-gray-500 text-sm leading-relaxed">
        Skilled in JavaScript frameworks, React, Node.js, along with Java Spring Boot backend development and Docker containerization.
      </p>
    </div>


  </div>
</section>


<!-- Tech Stack Overview -->
<section class="py-20 bg-white text-center">
  <h2 class="text-3xl font-bold text-indigo-700 mb-8">Our Modern Tech Stack</h2>
  <p class="text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
    From scalable Java backends to dynamic frontends, we deliver full-stack solutions using today’s most powerful technologies.
  </p>

  <div class="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-800 px-6">
    <!-- Backend -->
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Java 17+</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Spring Boot 3</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Spring Cloud</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">WebFlux (Reactive)</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Apache Kafka</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">GraphQL</span>

    <!-- DevOps -->
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Docker</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Kubernetes</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">CI/CD (GitHub Actions)</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Testcontainers</span>
    <span class="bg-indigo-100 px-5 py-2 rounded-full">Observability (Prometheus, Grafana)</span>

    <!-- Frontend -->
    <span class="bg-yellow-100 px-5 py-2 rounded-full">Angular</span>
    <span class="bg-yellow-100 px-5 py-2 rounded-full">React</span>
    <span class="bg-yellow-100 px-5 py-2 rounded-full">Tailwind CSS</span>
  </div>
</section>



<!-- Mission / Vision Section -->
<section class="py-20 bg-indigo-50 text-center">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">Our Vision</h2>
    <p class="text-lg text-gray-700 leading-relaxed">
      At CodeAstra, we envision a tech landscape where businesses of all sizes harness the power of modern backend systems —
      robust, scalable, and crafted with clarity. With enterprise-grade expertise and a personal freelancing touch, we help
      you build the future.
    </p>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-indigo-700 text-white text-center">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="text-4xl font-bold mb-6">Let’s Build Something Great Together</h2>
    <p class="text-lg mb-8 text-indigo-100">
      Whether you're a startup, agency, or enterprise — we're here to elevate your backend architecture.
    </p>
    <a href="/contact" class="inline-block bg-white text-indigo-700 font-semibold text-sm sm:text-base px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
      Get In Touch
    </a>
  </div>
</section>


<%@ include file="footer.jsp" %>
