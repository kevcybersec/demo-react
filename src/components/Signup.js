import React from 'react'
import './Signup.css'

function Signup() {
  return (
         <div class="signUpContainer">
            <h2 class="signUpTitle">Sign Up Form</h2>
            <form id="form" action="/" class="signUpForm" method="GET">
                
                <div class="input-control">
                <input type="text" placeholder="Enter First Name" id="firstName" name="name" onkeyup="validateFirstName()"/>
                <div id="firstname-error"></div>
                 </div>

                 <div class="input-control">
                <input type="text" placeholder="Enter Last Name" id="lastName" name="name" onkeyup="validateLastName()"/>
                <div class="lastname-error"></div>
                </div>
               

                <div class="input-control">
                <input type="tel" placeholder="123 456 7890" id="mobileNo" name="mobile" onkeyup="validateMobileNo()"/>
                 <div id="mobile-error"></div>
                </div>

                <div class="input-control">
                <input type="text" placeholder="Enter Age" id="age" name="age" onkeyup="validateAge()"/>
                 <div id="age-error"></div>
                </div>

                <div class="input-control">
                <input type="text" placeholder="Enter Email Address" id="email" name="email" onkeyup="validateEmail()"/>
                 <div id="email-error"></div>
                </div>

                <div class="input-control">
                <input type="password" placeholder="Enter Password" name="password" id="password" onkeyup="validatePassword()"/>
                <div id="password-error"></div>
                </div>

                <div class="input-control">
                    <input type="password" placeholder="Confirm Password" id="password2" name="password2" onkeyup="validatePassword2()"/>
                    <div id="password2-error"></div>
                 </div>
                


                <button class="btn-sign signUpButton" type="button">Sign Up</button>
                <div id="error"></div>
            </form>
    

            
        </div>
  )
}

export default Signup