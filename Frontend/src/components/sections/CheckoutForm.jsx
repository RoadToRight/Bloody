import React from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
    return (
        <div className={styles.checkoutWrap}>
            <div>
                <section className={styles.section}>
                    <h2>Contact</h2>
                    <p>
                        Already have an account? <a href="#">Sign in</a>
                    </p>

                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Email" />
                    </div>

                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Email me with news and offers</span>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Delivery</h2>
                    <div className={styles.field}>
                        <label htmlFor="country">Country/Region</label>
                        <select id="country" defaultValue="pakistan">
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>

                    <div className={styles.inputRow}>
                        <div className={styles.field}>
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" type="text" placeholder="First name" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="lastName">Last name</label>
                            <input id="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" placeholder="Address" />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="apt">Apartment, suite, etc. (optional)</label>
                        <input id="apt" type="text" placeholder="Apartment, suite, etc. (optional)" />
                    </div>

                    <div className={styles.inputRow}>
                        <div className={styles.field}>
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" placeholder="City" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="postal">Postal code (optional)</label>
                            <input id="postal" type="text" placeholder="Postal code (optional)" />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" type="tel" placeholder="Phone" />
                    </div>

                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Save this information for next time</span>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Text me with news and offers</span>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Shipping method</h2>
                    <label className={styles.radioCard}>
                        <input type="radio" name="shipping" defaultChecked />
                        <div className={styles.radioContent}>
                            <div className={styles.radioTitle}>
                                <span>Standard</span>
                                <span>Rs 200.00</span>
                            </div>
                        </div>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Payment</h2>
                    <p>All transactions are secure and encrypted.</p>

                    <label className={styles.radioCard}>
                        <input type="radio" name="payment" defaultChecked />
                        <div className={styles.radioContent}>
                            <div className={styles.radioTitle}>
                                <span>Safepay Checkout - pay with debit & credit cards</span>
                                <span className={styles.badge}>
                                    <FaCcVisa />
                                    <FaCcMastercard />
                                </span>
                            </div>
                            <div className={styles.radioSubtitle}>
                                You&apos;ll be redirected to Safepay Checkout - pay with debit & credit
                                cards to complete your purchase.
                            </div>
                        </div>
                    </label>

                    <label className={styles.radioCard}>
                        <input type="radio" name="payment" />
                        <div className={styles.radioContent}>
                            <div className={styles.radioTitle}>
                                <span>Bank Deposit</span>
                            </div>
                        </div>
                    </label>
                </section>

                <section className={styles.section}>
                    <h2>Billing address</h2>

                    <label className={styles.radioCard}>
                        <input type="radio" name="billing" defaultChecked />
                        <div className={styles.radioContent}>
                            <div className={styles.radioTitle}>
                                <span>Same as shipping address</span>
                            </div>
                        </div>
                    </label>

                    <label className={styles.radioCard}>
                        <input type="radio" name="billing" />
                        <div className={styles.radioContent}>
                            <div className={styles.radioTitle}>
                                <span>Use a different billing address</span>
                            </div>
                        </div>
                    </label>
                </section>

                <button className={styles.payButton} type="button">
                    Pay now
                </button>
            </div>

            <aside className={styles.summary}>
                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <img
                            src="/mouse.webp"
                            alt="R90 Ultra Dual Mode Wireless Gaming Mouse"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productTitle}>
                            R90 Ultra Dual Mode Wireless Gaming Mouse
                        </div>
                        <div className={styles.productMeta}>Black</div>
                        <div className={styles.productPrice}>Rs 7,000.00</div>
                    </div>
                </div>

                <div className={styles.discount}>
                    <input type="text" placeholder="Discount code" />
                    <button type="button">Apply</button>
                </div>

                <div className={styles.totals}>
                    <div className={styles.totalsRow}>
                        <span>Subtotal</span>
                        <span>Rs 7,000.00</span>
                    </div>
                    <div className={styles.totalsRow}>
                        <span>Shipping</span>
                        <span>Rs 200.00</span>
                    </div>
                    <div className={styles.totalsTotal}>
                        <strong>Total</strong>
                        <strong>Rs 7,200.00</strong>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default CheckoutForm
