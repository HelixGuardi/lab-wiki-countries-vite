function CountryDetails() {

    return(
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

            <h1>Country Name*</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>Capital Name*</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            Area Extension*
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/country-border*"></a>country border*</li>
                                {/* ... */}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
