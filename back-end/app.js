const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const sequelize = require('./conexion');

//routers
const userRouter = require('./routers/user.routes');
const regionRouter = require('./routers/region.routes');
const countryRouter = require('./routers/country.routes');
const cityRouter = require('./routers/city.routes');
const companyRouter = require('./routers/company.routes');
const contactRouter = require('./routers/contact.routes');
const contactWithChannelRouter = require('./routers/contactWithChannel.routes');

//middleware
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', userRouter);
app.use('/region', regionRouter);
app.use('/country', countryRouter);
app.use('/city', cityRouter);
app.use('/company', companyRouter);
app.use('/contact', contactRouter);
app.use('/contactWithChannel', contactWithChannelRouter);

//server
app.listen(port, () => {
    console.log(`Executing the sistem on the port ${port}`);
});