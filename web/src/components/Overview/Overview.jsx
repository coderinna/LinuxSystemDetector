
import { getSecurityChecks } from './securityChecks.js';

function Overview({ t }) {
const checks = getSecurityChecks(t);

    return (
        <section className="overview" id="overview">

            <h2>{t.overview}</h2>

            <p>{t.overviewDescription}</p>

            <div className="grid">

                {checks.map((check, index) => (
                    <div className="card" key={index}>

                        <div className="card-icon">
                            {check.icon}
                        </div>

                        <h3>{check.title}</h3>

                        <p>{check.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Overview;