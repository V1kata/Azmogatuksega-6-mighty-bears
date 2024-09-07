import { MainSection } from "../all/MainSection"
import { Given } from '../all/Given';

export function Checkout() {
    return (
        <>
        <MainSection text={'Checkout'} />
        
        <section class="billing">
            <div class="billing-left">
                <h2>Billing details</h2>

                <form>
                    <div class="names">
                        <div>
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div>
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <div>
                        <label for="companyName">Company  Name (Optional)</label>
                        <input type="text" id="companyName" name="companyName" />
                    </div>
                    <div>
                        <label for="country">Country / Region</label>
                        <select id="country" name="country" required>
                            <option defaultValue="Sri Lanka">Sri Lanka</option>
                        </select>
                    </div>
                    <div>
                        <label for="streetAddress">Street Address</label>
                        <input type="text" id="streetAddress" name="streetAddress" required />

                    </div>
                    <div>
                        <label for="townCity">Town / City</label>
                        <input type="text" id="townCity" name="townCity" required />
                    </div>
                    <div>
                        <label for="province">Province</label>
                        <select id="province" name="province" required>
                            <option defaultValue="Western Province">Western Province</option>
                        </select>
                    </div>
                    <div>
                        <label for="zipCode">ZIP Code</label>
                        <input type="text" id="zipCode" name="zipCode" required />
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required />

                    </div>
                    <div>
                        <textarea id="additionalInformation" name="additionalInformation"
                            placeholder="Additional Information"></textarea>
                    </div>
                </form>
            </div>
            <div class="billing-right">
                <div class="billing-top-payment">
                    <div class="payment-left">
                        <h3>Product</h3>
                        <div class="item">
                            <p class="grey">Asgaard sofa</p>
                            <p>x</p>
                            <p>1</p>
                        </div>
                        <p>Subtotal</p>
                        <p>Total</p>
                    </div>
                    <div class="payment-right">
                        <h3>Subtotal</h3>
                        <p>Rs. 250,000.00</p>
                        <p>Rs. 250,000.00</p>
                        <h4 class="golden">Rs. 250,000.00</h4>
                    </div>
                </div>

                <div class="payment-methods">
                    <ul class="payment-list">
                        <li>
                            <input type="radio" class="grey" name="payment" id="directBankTransfer"
                                defaultValue="Direct Bank Transfer" />
                                <label for="directBankTransfer" class="grey">Direct Bank Transfer</label>
                                <p class="grey">Make your payment directly into our bank account. Please use your Order ID
                                    as the payment
                                    reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                        </li>
                        <li>
                            <input type="radio" name="payment" id="cashOnDelivery" defaultValue="Cash On Delivery" />
                                <label for="cashOnDelivery">Cash On Delivery</label>
                                <p>Your personal data will be used to support your experience throughout this website, to
                                    manage
                                    access
                                    to your account, and for other purposes described in our <b>privacy policy.</b></p>
                        </li>
                    </ul>
                    <button type="submit">Place Order</button>
                </div>
            </div>
        </section>

        <Given />
        </>
    )
}