import React from "react";
import { CardContent, Grid, Typography } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://static.highsnobiety.com/thumbor/7ENUPwTSBlQw1IIgkZFRk1EBi1Q=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/08/02214655/nike-best-running-shoe-chart-001.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.dalinuosi.lt/img/photos/large/181/item_18182_e707ffffe5aa75a9.jpg?1620054794' }
]

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
           {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
    
}

export default Products;