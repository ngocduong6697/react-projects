import React from 'react';
import ReactDOM from 'react-dom';
import './components/CommentDetail'
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 16:06PM" content="Nice blog post"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 10:06PM" content="I like coding"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Pyn" timeAgo="Today at 11:06PM" content="I like sport"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jun" timeAgo="Today at 12:06PM" content="I like Swimming"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Luz" timeAgo="Yesterday at 16:06PM" content="The weather today so good!"/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));