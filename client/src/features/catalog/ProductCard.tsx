import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from "../../../models/product";
import { Avatar, CardHeader } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';


interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    
    const history = useHistory()

    return (
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
                
            <CardMedia
                
                image={product.pictureUrl}
                title={product.name}
                sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
            />
            <CardContent>
                <Typography gutterBottom color='text.secondary' variant="h5">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                {/* <Button LinkComponent={Link} to={} size="small">View</Button> */}
                <Button LinkComponent={Link} onClick={() => history.push(`/catalog/${product.id}`)} size="small">View</Button>
            </CardActions>
        </Card>
    )
}