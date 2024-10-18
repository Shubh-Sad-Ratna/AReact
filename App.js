const parent=React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{id:'head1'},"Hello h1"),
        React.createElement('h2',{id:'head2'},"Hello h2")
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{id:'head3'},"Hello h1"),
        React.createElement('h2',{id:'head4'},"Hello h2")
    ])
]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);