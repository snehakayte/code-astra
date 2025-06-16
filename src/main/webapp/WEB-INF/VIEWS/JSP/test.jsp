<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Floating Label Test</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10 bg-gray-50 min-h-screen flex items-center justify-center">

<div class="max-w-md w-full">
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
</div>

</body>
</html>
