import * as React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IRepository } from '../domain/interfaces';

export default class RepositoryCard extends React.Component<IRepository, any> {

    public render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        <a href={this.props.html_url}>{this.props.full_name}</a>
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                        {this.props.description}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="body2" component="p" gutterBottom>
                                Created: {moment(this.props.created_at).format('Do MMMM YYYY')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="p" gutterBottom>
                                <StarIcon />
                                {this.props.stargazers_count}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        );
    }

}
