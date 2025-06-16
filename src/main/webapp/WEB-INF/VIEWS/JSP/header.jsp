<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    
    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- SEO Meta -->
    <title>CodeAstra - Scalable Java Freelancers | Java, Kafka, Kubernetes Expert Developers</title>
    <meta name="description" content="Hire expert Java developers, Kafka specialists, and Kubernetes professionals. Scalable backend solutions with Spring Boot, Microservices, and cloud-native architecture." />
    <meta name="keywords" content="Java Developer, Kafka Developer, Kubernetes, Spring Boot Freelancer, Backend Developer, Microservices" />
    <meta name="author" content="CodeAstra" />
    
    <!-- Open Graph for social sharing -->
    <meta property="og:title" content="CodeAstra - Scalable Java Freelancers" />
    <meta property="og:description" content="Hire expert Java developers, Kafka specialists, and Kubernetes professionals." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageContext.request.requestURL}" />
    <meta property="og:image" content="${pageContext.request.contextPath}/assets/og-image.png" />

    <!-- Favicon -->
    <link rel="icon" href="${pageContext.request.contextPath}/assets/favicon.ico" type="image/x-icon" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Flatpickr & AOS CSS -->
    <link href="https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/material_blue.css" rel="stylesheet" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Focus outline for accessibility */
        a:focus, button:focus {
            outline: 2px solid #4F46E5; /* Indigo-600 */
            outline-offset: 2px;
        }
    </style>
</head>
<body class="bg-white text-gray-800">

<c:set var="context" value="${pageContext.request.contextPath}" />

<header class="bg-white shadow-md sticky top-0 z-50" role="banner" aria-label="Primary navigation">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="${context}/" 
       class="text-2xl font-extrabold text-indigo-700 hover:text-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded"
       aria-label="CodeAstra Home">
      Code Astra Solutions
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8 text-sm font-semibold" role="navigation" aria-label="Main menu">
      <a href="${context}/" 
         class="relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600
         <c:if test='${page eq "home"}'> text-indigo-800 font-bold </c:if> hover:text-indigo-700 transition-colors duration-200">
        Home
        <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left <c:if test='${page eq "home"}'> scale-x-100 </c:if>"></span>
      </a>
      <a href="${context}/about" 
         class="relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600
         <c:if test='${page eq "about"}'> text-indigo-800 font-bold </c:if> hover:text-indigo-700 transition-colors duration-200">
        About
        <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left <c:if test='${page eq "about"}'> scale-x-100 </c:if>"></span>
      </a>
      <a href="${context}/services" 
         class="relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600
         <c:if test='${page eq "services"}'> text-indigo-800 font-bold </c:if> hover:text-indigo-700 transition-colors duration-200">
        Services
        <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left <c:if test='${page eq "services"}'> scale-x-100 </c:if>"></span>
      </a>
      <a href="${context}/appointment" 
         class="relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600
         <c:if test='${page eq "appointment"}'> text-indigo-800 font-bold </c:if> hover:text-indigo-700 transition-colors duration-200">
        Book
        <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left <c:if test='${page eq "appointment"}'> scale-x-100 </c:if>"></span>
      </a>
      <a href="${context}/contact" 
         class="relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600
         <c:if test='${page eq "contact"}'> text-indigo-800 font-bold </c:if> hover:text-indigo-700 transition-colors duration-200">
        Contact
        <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left <c:if test='${page eq "contact"}'> scale-x-100 </c:if>"></span>
      </a>
    </nav>

    <!-- Mobile Toggle -->
    <div class="md:hidden">
      <button id="mobileMenuBtn" 
              class="text-indigo-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
              aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileMenu">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <nav id="mobileMenu" class="md:hidden hidden px-6 pb-6 space-y-3 text-sm font-semibold bg-white shadow-inner" role="navigation" aria-label="Mobile main menu">
    <a href="${context}/" 
       class="block px-3 py-2 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600
       <c:if test='${page eq "home"}'> text-indigo-800 font-bold bg-indigo-100 </c:if>">
      Home
    </a>
    <a href="${context}/about" 
       class="block px-3 py-2 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600
       <c:if test='${page eq "about"}'> text-indigo-800 font-bold bg-indigo-100 </c:if>">
      About
    </a>
    <a href="${context}/services" 
       class="block px-3 py-2 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600
       <c:if test='${page eq "services"}'> text-indigo-800 font-bold bg-indigo-100 </c:if>">
      Services
    </a>
    <a href="${context}/appointment" 
       class="block px-3 py-2 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600
       <c:if test='${page eq "appointment"}'> text-indigo-800 font-bold bg-indigo-100 </c:if>">
      Book
    </a>
    <a href="${context}/contact" 
       class="block px-3 py-2 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600
       <c:if test='${page eq "contact"}'> text-indigo-800 font-bold bg-indigo-100 </c:if>">
      Contact
    </a>
  </nav>

  <script>
    // Toggle mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  </script>
</header>




</body>
</html>
