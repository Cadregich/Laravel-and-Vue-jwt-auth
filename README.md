<h2>Project Description</h2>
This project is an example of implementing JSON Web Token (JWT) based authentication for a Single-Page Application (SPA) using Laravel Sanctum. The project uses a simple but reliable approach to implement authentication without a lot of checks, which ensures the security of user data.
The authentication token is stored in a httpOnly cookie. When sending a request to the server, the AddAuthToHeaderFromJwtCookie middleware takes the token from the cookie and places it in the header. To make the middleware work, the route that requires authentication needs to specify middleware('auth:sanctum').

The client obtains user authentication information thanks to the second cookie 'AIT'. This cookie has the same lifetime as JWT, but does not contain any useful information and does not have the httpOnly flag. This allows the client to understand whether the user is identified. Both cookies are designed to prevent the user from damaging them.

The project also supports session-based authentication.

<h2>Advantages</h2>
<ul>
  <li><b>Speed:</b> This approach to authentication allows authentication operations to be performed quickly and without delays on both the server and client sides.</li>
  <li><b>Reliability:</b> Thanks to the use of JWT and security mechanisms, this approach to authentication is reliable and ensures the security of user data.</li>
  <li><b>Simplicity:</b> Implementing authentication in the project does not require a lot of checks and complex mechanisms, which makes the code more understandable and easily maintainable.</li>
</ul>
<h2>Usage</h2>
This is just an example implementation, so to use it fully, you need to create a copy of the project that will serve as a foundation.
