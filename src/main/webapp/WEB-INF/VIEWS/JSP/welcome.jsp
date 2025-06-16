<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.ResourceBundle" %>

<%
response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
response.setHeader("Cache-Control", "post-check=0, pre-check=0");
response.setHeader("Pragma", "no-cache");

//Load the database properties file
ResourceBundle databasebundle = ResourceBundle.getBundle("database");

//Retrieve the contextName from the properties file
String contextNameStr = databasebundle.getString("contextName");

%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to API Monitoring Platform</title>
  
  <script src="${pageContext.request.contextPath}/JS/rightclick_script.js"></script>
  <script src="${pageContext.request.contextPath}/JS/lib/sweetalert.min.js"></script>
<script src="${pageContext.request.contextPath}/JS/lib/jquery-3.2.1.min.js"></script>

  <script>
	var contextPath = '${pageContext.request.contextPath}';
</script>
 
  <link rel="stylesheet" href="${pageContext.request.contextPath}/CSS/welcome.css">

<script>
  var contextPath = '<%= request.getContextPath() %>';
  var contextName = "<%= contextNameStr %>";
  var backgroundUrl =  contextName + '/LOGO/User/background.jpg';

  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundImage = 'url(' + backgroundUrl + ')';
  });
</script>

</head>
<body>
  <div class="container">
    <h1>Welcome to API Monitoring Platform</h1>
    <p>Keeping Your APIs Performant and Reliable</p>
    <hr>
    <p>Welcome Message: <br> Welcome to API Monitoring Platform! We're dedicated to ensuring the performance, reliability, and security of your APIs. With our comprehensive monitoring solutions, you can stay informed, identify issues early, and keep your APIs running smoothly.</p>
    <hr>
    <p>Key Features:</p>
    <ul>
      <li>Real-time Monitoring</li>
      <li>Performance Metrics</li>
      <li>Error Detection</li>
      <li>Alerts and Notifications</li>
      <li>API Health Checks</li>
     
    </ul>
    <hr>
    <p>Get Started:</p>
    <a href="${pageContext.request.contextPath}/logins" class="btn">Login</a>
    <a href="${pageContext.request.contextPath}/home" class="btn">Explore</a>
    <hr>
    <p>Stay Connected:</p>
    <p>Follow us on social media for the latest updates, tips, and best practices.</p>
    <hr>
    <p>Contact Us:</p>
    <p>Have questions or need assistance? Reach out to our support team at <a href="mailto:support@api-monitoring.com">yalamanchili@api-monitoring.com</a>.</p>
  </div>
 
  
</body>
</html>
