// @flow
import { CompositeDecorator } from 'draft-js';
import { Link, HandleSpan, HashtagSpan } from '../components/Decorators';
import { linkStrategy, handleStrategy, hashtagStrategy } from './strategies';

export default new CompositeDecorator([
    {
        strategy: linkStrategy,
        component: Link
    },
    {
        strategy: handleStrategy,
        component: HandleSpan
    },
    {
        strategy: hashtagStrategy,
        component: HashtagSpan
    }
]);
