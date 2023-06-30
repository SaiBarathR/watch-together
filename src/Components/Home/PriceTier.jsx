import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { ReactComponent as TickIcon } from "../../Icons/tick.svg"

export default function PriceTier() {

    return (
        <div className="pricing-container">
            <Grid container className="pricing-card-container" >
                <PriceBoxRenderer plan={"Free"} price={"$0.00/mo"} features={['Basic Features', '5 Viewers', 'Local Files', 'Platform Access']} />
                <PriceBoxRenderer plan={"Premium"} price={"$9.99/mo"} features={['Advanced Features', '10 Viewers', 'Priority Support', 'Ad-free']} />
                <PriceBoxRenderer plan={"Ultimate"} price={"$14.99/mo"} features={['All Features', '50 Viewers', 'Custom Domain', 'Early Access']} />
            </Grid>
        </div>
    )
}

function PriceBoxRenderer({ plan, price, features }) {

    return <Grid item sm={12} md={3.8} className="pricing-card" >
        <Typography component={"p"} className="pricing-card-plan">{plan}</Typography>
        <Typography component={"h3"} className="pricing-card-price">{price}</Typography>
        <div className="pricing-card-feature-list-container">
            {features.map((feature, index) => <div className="pricing-card-feature-list" key={index + feature}>
                <TickIcon />
                <Typography component={"p"} className="pricing-card-plan">{feature}</Typography>
            </div>
            )}
        </div>
    </Grid>
}