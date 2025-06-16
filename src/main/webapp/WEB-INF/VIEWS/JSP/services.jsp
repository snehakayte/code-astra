<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    request.setAttribute("page", "services");
%>
<%@ include file="header.jsp" %>

<!-- Services Hero -->
<section data-aos="fade-up" data-aos-delay="200" class="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-24 px-6 text-center">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg leading-tight">
      End-to-End Java Solutions, Engineered for Growth
    </h1>
    <p class="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-indigo-100 drop-shadow-md">
      From microservices and event-driven systems to secure API integration and cloud-native deployments —
      CodeAstra delivers scalable technology that drives real results.
    </p>
  </div>
</section>


<section class="max-w-7xl mx-auto px-6 py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-3">

  <!-- Java Microservices -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-indigo-100 text-indigo-700 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18v2a4 4 0 11-8 0v-2m8 0v-3a4 4 0 10-8 0v3m8 0H8" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-indigo-700 mb-3">Java Microservices</h3>
    <p class="text-gray-600 leading-relaxed">
      Build cloud-native microservices with Spring Boot 3, WebFlux, DDD, and secure REST APIs for high-scale distributed systems.
    </p>
    <a href="/services#java" class="mt-6 text-indigo-600 font-semibold hover:underline">Learn More →</a>
  </div>

  <!-- Kafka Stream Systems -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-amber-100 text-amber-600 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.28 0 4.363-.87 5.894-2.294m-1.552 5.718a6.982 6.982 0 01-4.342 1.785 7 7 0 01-7-7c0-3.867 3.133-7 7-7 3.867 0 7 3.133 7 7 0 .81-.16 1.587-.452 2.306" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-amber-600 mb-3">Kafka Event Systems</h3>
    <p class="text-gray-600 leading-relaxed">
      Real-time streaming platforms using Apache Kafka, Kafka Streams, ksqlDB & Connect for async architecture and data pipelines.
    </p>
    <a href="/services#kafka" class="mt-6 text-amber-600 font-semibold hover:underline">Learn More →</a>
  </div>

  <!-- Kubernetes & GitOps -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-emerald-100 text-emerald-600 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v6l2 1 3-2 5 1v4l-3 3-1 3 2 2v2H5v-3l1-2-1-3v-6z" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-emerald-600 mb-3">Kubernetes & GitOps</h3>
    <p class="text-gray-600 leading-relaxed">
      Automated cloud-native deployments using Kubernetes, Helm, ArgoCD, and GitHub Actions with full GitOps workflows.
    </p>
    <a href="/services#kubernetes" class="mt-6 text-emerald-600 font-semibold hover:underline">Learn More →</a>
  </div>

  <!-- API Engineering -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-cyan-100 text-cyan-600 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m-4 16H6m4 0h4" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-cyan-600 mb-3">API Engineering</h3>
    <p class="text-gray-600 leading-relaxed">
      Secure and scalable APIs using REST, GraphQL, OpenAPI 3.0, Postman collections, Swagger docs, rate limiting, and OAuth2.
    </p>
    <a href="/services#api" class="mt-6 text-cyan-600 font-semibold hover:underline">Learn More →</a>
  </div>

  <!-- Cloud & DevSecOps -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-red-100 text-red-600 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-red-600 mb-3">Cloud & DevSecOps</h3>
    <p class="text-gray-600 leading-relaxed">
      Infra automation with AWS, GCP, Terraform, Vault, GitHub Actions, and full shift-left DevSecOps with IaC security scans.
    </p>
    <a href="/services#cloud" class="mt-6 text-red-600 font-semibold hover:underline">Learn More →</a>
  </div>

  <!-- Database Engineering -->
  <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center group">
    <div class="bg-purple-100 text-purple-600 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform">
      <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4C7.03 4 3 5.79 3 8v8c0 2.21 4.03 4 9 4s9-1.79 9-4V8c0-2.21-4.03-4-9-4z" />
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-purple-600 mb-3">Database Engineering</h3>
    <p class="text-gray-600 leading-relaxed">
      Expert DB solutions using PostgreSQL, Redis, MongoDB with optimized indexing, sharding, connection pools & Redis caching.
    </p>
    <a href="/services#database" class="mt-6 text-purple-600 font-semibold hover:underline">Learn More →</a>
  </div>

</section>


<!-- Deep Dive Sections -->
<section class="max-w-5xl mx-auto px-6 pb-20 space-y-16">

  <!-- Java Microservices -->
  <article id="java" class="border-l-4 border-indigo-600 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-indigo-700">Java Microservices</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      We build scalable and resilient Java-based microservices using Spring Boot 3+, WebFlux, and modular architecture. Whether it's domain-driven design or reactive programming, we deliver high-quality, production-ready services.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Spring Boot 3.x with REST/WebFlux support</li>
      <li>Secure APIs using OAuth2, JWT, and Spring Security</li>
      <li>Modular Microservices Architecture with DDD</li>
      <li>Resilience with Resilience4J, Circuit Breakers</li>
      <li>Observability: Actuator, Micrometer, OpenTelemetry</li>
    </ul>
  </article>

  <!-- Kafka Event Systems -->
  <article id="kafka" class="border-l-4 border-red-600 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-red-700">Kafka Event Systems</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      We specialize in designing high-throughput, fault-tolerant Kafka-based messaging platforms. Real-time data flow and event-driven architecture are core to our solutions.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Kafka Core (Producer, Consumer, Broker Clustering)</li>
      <li>Kafka Streams, ksqlDB for stream processing</li>
      <li>Connectors with Debezium, JDBC, Elasticsearch</li>
      <li>Schema Registry with Avro for contract enforcement</li>
      <li>Monitoring with Confluent Control Center & Prometheus</li>
    </ul>
  </article>

  <!-- Kubernetes & GitOps -->
  <article id="kubernetes" class="border-l-4 border-green-600 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-green-700">Kubernetes & GitOps</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      Simplify, scale, and automate your deployments with Kubernetes. Our GitOps workflows ensure consistency and security in modern CI/CD pipelines.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Kubernetes cluster provisioning (GKE/EKS/AKS)</li>
      <li>Helm charts for repeatable deployments</li>
      <li>GitOps pipelines using ArgoCD & FluxCD</li>
      <li>Pod autoscaling, resource limits & readiness checks</li>
      <li>Secrets & config management using HashiCorp Vault</li>
    </ul>
  </article>

  <!-- API Engineering -->
  <article id="api" class="border-l-4 border-cyan-600 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-cyan-700">API Engineering</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      We design robust and developer-friendly APIs, following OpenAPI standards and providing complete documentation with real-time validation.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>RESTful and GraphQL API design</li>
      <li>Swagger/OpenAPI 3.0 documentation</li>
      <li>Rate limiting, caching, and throttling policies</li>
      <li>Secure APIs with OAuth2, API Keys, and CORS</li>
      <li>Postman collection sharing and test automation</li>
    </ul>
  </article>

  <!-- Cloud & DevSecOps -->
  <article id="cloud" class="border-l-4 border-yellow-500 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-yellow-600">Cloud & DevSecOps</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      Our infrastructure automation and cloud-native solutions streamline your deployment lifecycle while keeping security first.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Infrastructure-as-Code with Terraform & Pulumi</li>
      <li>CI/CD with GitHub Actions, GitLab, Jenkins</li>
      <li>AWS/GCP Cloud provisioning and monitoring</li>
      <li>Secrets management & security hardening</li>
      <li>Shift-left DevSecOps with SAST/DAST scans</li>
    </ul>
  </article>

  <!-- Database Engineering -->
  <article id="database" class="border-l-4 border-purple-600 pl-6">
    <h2 class="text-3xl font-bold mb-4 text-purple-700">Database Engineering</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      We engineer databases for performance, reliability, and scalability. From RDBMS tuning to distributed NoSQL strategies, we cover it all.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>PostgreSQL, MySQL, and Oracle optimization</li>
      <li>High-speed caching with Redis & Memcached</li>
      <li>MongoDB and NoSQL schema design</li>
      <li>Sharding, replication, and backup strategies</li>
      <li>Liquibase/Flyway-based versioned migrations</li>
    </ul>
  </article>

</section>

<%@ include file="footer.jsp" %>
