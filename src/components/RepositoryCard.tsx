import * as React from 'react';
import moment from 'moment';

import { IRepository } from '../domain/interfaces';

export default class RepositoryCard extends React.Component<IRepository, any> {
    
    public render() {
        return (
            <li>
                <h2><a href={this.props.html_url}>{ this.props.full_name }</a></h2>
                <p>{this.props.description}</p>
                <span>Created: {moment(this.props.created_at).format('Do MMMM YYYY')}</span>
                <span>
                    <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                    </svg>
                    {this.props.stargazers_count}
                </span>
            </li>
        );
    }

}
