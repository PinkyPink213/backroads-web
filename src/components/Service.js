import React from 'react'
import { serviceData } from '../data'
function Service() {
    return (
        <div className="section-center services-center">
            {
                serviceData.map(({ id, icon, title, text }) => {
                    return (
                        <article className="service" key={id}>
                            <span className="service-icon"><i className={icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{title}</h4>
                                <p className="service-text">
                                    {text}
                                </p>
                            </div>
                        </article>

                    )
                })
            }
        </div>

    )
}

export default Service
