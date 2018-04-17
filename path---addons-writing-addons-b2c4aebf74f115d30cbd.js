webpackJsonp([0xe6341f0f1372],{659:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/","/basics/live-examples/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/typescript-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"API",id:"api"}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"Addon Gallery",id:"addon-gallery"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/live-examples/"},frontmatter:{title:"Live Examples",id:"live-examples"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/configurations/typescript-config/"},frontmatter:{title:"Typescript Config",id:"typescript-config"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}}]},markdownRemark:{html:'<p>This is a complete guide on how to create addons for Storybook.</p>\n<h2 id="storybook-basics"><a href="#storybook-basics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Storybook Basics</h2>\n<p>Before we begin, we need to learn a bit about how Storybook works. Basically, Storybook has a <strong>Manager App</strong> and a <strong>Preview Area</strong>.</p>\n<p>Manager App is the client side UI for Storybook. Preview Area is the place where the story is rendered. Usually the Preview Area is an iframe.</p>\n<p>When you select a story from the Manager App, the relevant story is rendered inside the Preview Area.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-43677.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.913907284768214%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVQ4y5WSW2+bQBCF/f9/T9U+VOpbk1atlFSNuS8slxA7Nss9YMCcziyO5SjuQx4+zbDLHp25rKx8ezQaBaepZqsuYFcFRJkjaErIttJw7hZKR78udfToH7fI9DlHr1T6bOUPHUTfzl7XQFAeksDGMvBEbG1zyU1mjb3noAwDFNLX8Ror96We/b5FNB1mOQ2IX2rkroXMZmwo4SD3PU1JQhU9qjj+h5VDjsyWSpl6+McBEX2XwkUVCJS+QBF4hDjDLqoL3jnkUqVSiDMFWdeIuhZbx0Lw5w7B/R02VO7etbGjs2dyzXnmOW8cn52zoBx7PG52SKIUT0mKZ2pu9PMWD7ffsf5xg9R4gCKBVxFGUQVKLM7fCQY0CP94QAzgt23g6+dPqNd/kZNAIQN6KJCdXC1CLupIai7FODJaUB46pBjxhcq8cUwU9DNPdWuZetJnrGXqXHbO/bwy7VU4drjPO3wLa/zaUf+oBRk9zKhne3uJPHHOlWNr57nr6FhR+Ty8S3QPBTk0Gip96CFpheIqR0S9TGiJk+YELf0jxZS2IG1rpLReS/4WLnlm0WjqZ8nlUx7OoybG8SrRiWt32iGLBoOOWjDBtECiH4UdjixCzK+CMV1EtOQcP0I4HfAPAhfIFlyJabwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Storybook Components"\n        title=""\n        src="/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-44d6a.png"\n        srcset="/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-f4799.png 173w,\n/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-b3b1d.png 345w,\n/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-44d6a.png 690w,\n/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-bc0f7.png 1035w,\n/static/storybook-components-79d324030bccb3aea4dfc6c7e3ee5a00-43677.png 1359w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As shown in the above image, there’s a communication channel that the Manager App and Preview Area use to communicate with each other.</p>\n<h2 id="capabilities"><a href="#capabilities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Capabilities</h2>\n<p>With an addon, you can add more functionality to Storybook. Here are a few things you could do:</p>\n<ul>\n<li>Add a panel to Storybook (like Action Logger).</li>\n<li>Interact with the story and the panel.</li>\n<li>Set and get URL query params.</li>\n<li>Select a story.</li>\n<li>Register keyboard shortcuts (coming soon).</li>\n</ul>\n<p>With this, you can write some pretty cool addons. Look at our <a href="/addons/addon-gallery">Addon gallery</a> to have a look at some sample addons.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>Let’s write a simple addon for Storybook. It’s a Notes addon on which you can display some notes for a story.</p>\n<blockquote>\n<p>Just for the simplicity, we’ll write the addon right inside our app. But we can easily move it into a separate NPM module.</p>\n</blockquote>\n<h2 id="how-it-looks"><a href="#how-it-looks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How it looks</h2>\n<p>We write a story for our addon like this:</p>\n<pre><code class="language-js">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { WithNotes } from \'../notes-addon\';\n\nimport Button from \'./Button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;WithNotes notes={\'This is a very simple Button and you can click on it.\'}>\n      &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n    &#x3C;/WithNotes>\n  ))\n  .add(\'with some emoji\', () => (\n    &#x3C;WithNotes notes={\'Here we use some emoji as the Button text. Doesn&#x26;apos;t it look nice?\'}>\n      &#x3C;Button onClick={action(\'clicked\')}>&#x3C;span role="img" aria-label="so cool">😀 😎 👍 💯&#x3C;/span>&#x3C;/Button>\n    &#x3C;/WithNotes>\n  ));\n</code></pre>\n<p>Then it will appear in the Notes panel like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0c959.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.149130074565036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQoz6VSy07CQBTtgg8w0cQPcOOiukA/zZg4+gN8AB8AhFADhbB1j3EFKfLQAC2h4iNQQh+Udmba8U5hAZJoDSc5udPOnXPPvTNCrfhw8PJcux5/vN2+jz/QUNWQpo7Q55eBJpMpMqZTNNSGSNM0WPN/EzTWx2jQHyC1ryJtoN3oI/2u99q7kovyoVCU7s8c22RBEDCCCVvBZ4yY7D9YLpesVCpdCJlMRjQty8UYU9/3sQ+LICCYBRhDXhxCdUYJIXalUkkKhUJB1HUdz+cm8zwvhEohpUEISWFMBNwhnHXL5XJSkCRJNAwDz2YztlgsQthglNKoDUiOwzAaku+vBLPZrAhCmIusHe4I/oYdwVwuJzqOA5PDfLBbghuH/nTIW45myB3atr0lyNvmdF03uj0YOOP7PPJiPxgJQu7KIb9ly7I8+A6hdQqR8ghFqG1ZUYQOIoI4BUMUntgmydqhI8tyUsjn8+e88r7gnVer1UshlUqdKIry1Gw2FWAd2Gi3241utxuLnU6nDlFptVqP6XT6VAAkgEfA4z3JNRLf2bUiqYBuuY4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="With notes"\n        title=""\n        src="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-44d6a.png"\n        srcset="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-f4799.png 173w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-b3b1d.png 345w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-44d6a.png 690w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-bc0f7.png 1035w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-b50e5.png 1380w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0ed32.png 2070w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0c959.png 2414w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h2>\n<p>First, create an <code>addons.js</code> inside the Storybook config directory and add the following content to it.</p>\n<pre><code class="language-js">// Register the actions addon that we used above\nimport \'@storybook/addon-actions/register\';\n</code></pre>\n<p>We’ll use this file shortly to register the Notes addon we are building.</p>\n<p>Now we need to create two files, <code>register.js</code> and <code>index.js,</code> inside a directory called <code>src/notes-addon</code>.</p>\n<h2 id="the-addon"><a href="#the-addon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Addon</h2>\n<p>Let’s add the following content to the <code>index.js</code>. It will expose a class called <code>WithNotes</code>, which wraps our story.</p>\n<pre><code class="language-js">import React from \'react\';\nimport addons from \'@storybook/addons\';\n\nexport class WithNotes extends React.Component {\n  render() {\n    const { children, notes } = this.props;\n    const channel = addons.getChannel();\n\n    // send the notes to the channel.\n    channel.emit(\'kadira/notes/add_notes\', notes);\n    // return children elements.\n    return children;\n  }\n}\n</code></pre>\n<p>In this case, our component can access something called the channel. It lets us communicate with the panel (where we display notes). It has a NodeJS <a href="https://nodejs.org/api/events.html">EventEmitter</a> compatible API.</p>\n<p>In the above case, it will emit the notes’ text to the channel, so our panel can listen to it.</p>\n<p>Then add the following code to the register.js.</p>\n<pre><code class="language-js">import React from \'react\';\nimport addons from \'@storybook/addons\';\n\nconst styles = {\n  notesPanel: {\n    margin: 10,\n    fontFamily: \'Arial\',\n    fontSize: 14,\n    color: \'#444\',\n    width: \'100%\',\n    overflow: \'auto\',\n  }\n};\n\nclass Notes extends React.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {text: \'\'};\n    this.onAddNotes = this.onAddNotes.bind(this);\n  }\n\n  onAddNotes(text) {\n    this.setState({text});\n  }\n\n  componentDidMount() {\n    const { channel, api } = this.props;\n    // Listen to the notes and render it.\n    channel.on(\'kadira/notes/add_notes\', this.onAddNotes);\n\n    // Clear the current notes on every story change.\n    this.stopListeningOnStory = api.onStory(() => {\n      this.onAddNotes(\'\');\n    });\n  }\n\n  render() {\n    const { text } = this.state;\n    const textAfterFormatted = text? text.trim().replace(/\\n/g, \'&#x3C;br />\') : "";\n\n    return (\n      &#x3C;div style={styles.notesPanel}>\n        &#x3C;div dangerouslySetInnerHTML={{__html: textAfterFormatted}} />\n      &#x3C;/div>\n    );\n  }\n\n  // This is some cleanup tasks when the Notes panel is unmounting.\n  componentWillUnmount() {\n    if(this.stopListeningOnStory) {\n      this.stopListeningOnStory();\n    }\n\n    this.unmounted = true;\n    const { channel, api } = this.props;\n    channel.removeListener(\'kadira/notes/add_notes\', this.onAddNotes);\n  }\n}\n\n// Register the addon with a unique name.\naddons.register(\'kadira/notes\', (api) => {\n  // Also need to set a unique name to the panel.\n  addons.addPanel(\'kadira/notes/panel\', {\n    title: \'Notes\',\n    render: () => (\n      &#x3C;Notes channel={addons.getChannel()} api={api}/>\n    ),\n  })\n})\n</code></pre>\n<p>It will register our addon and add a panel. In this case, the panel represents a React component called <code>Notes</code>. That component has access to the channel and storybook api.</p>\n<p>Then it will listen to the channel and render the notes text on the panel. Have a look at the above annotated code.</p>\n<blockquote>\n<p>In this example, we are only sending messages from the Preview Area to the Manager App (our panel). But we can do it the other way around as well.</p>\n</blockquote>\n<p>It also listens to another event, called onStory, in the storybook API, which fires when the user selects a story. We use that event to clear the previous notes when selecting a story.</p>\n<h3 id="register-the-addon"><a href="#register-the-addon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Register the addon</h3>\n<p>Now, finally, we need to register the addon by importing it to the <code>.storybook/addons.js</code> file.</p>\n<pre><code class="language-js">// Register the actions addon that we used above\nimport \'@storybook/addon-actions/register\';\n\n// Our addon\nimport \'../src/notes-addon/register\';\n</code></pre>\n<blockquote>\n<p>Above code runs in the Manager App but not in the preview area.</p>\n</blockquote>\n<p>That’s it. Now you can create notes for any story as shown below:</p>\n<pre><code class="language-js">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { WithNotes } from \'../notes-addon\';\n\nimport Button from \'./Button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;WithNotes notes={\'This is a very simple Button and you can click on it.\'}>\n      &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n    &#x3C;/WithNotes>\n  ))\n  .add(\'with some emojies\', () => (\n    &#x3C;WithNotes notes={\'Here we use emojies as the Button text. Doesn&#x26;apos;t it look nice?\'}>\n      &#x3C;Button onClick={action(\'clicked\')}>&#x3C;span role="img" aria-label="so cool">😀 😎 👍 💯&#x3C;/span>&#x3C;/Button>\n    &#x3C;/WithNotes>\n  ));\n</code></pre>\n<h2 id="addon-api"><a href="#addon-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Addon API</h2>\n<p>Here we’ve only used a few functionalities of our <a href="/addons/api">Addon API</a>.\nYou can learn more about the complete API <a href="/addons/api">here</a>.</p>\n<h2 id="packaging"><a href="#packaging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Packaging</h2>\n<p>You can package this addon into a NPM module very easily. As an example, have a look at this <a href="https://github.com/storybooks/storybook/tree/master/addons/notes">package</a>.</p>\n<p>In addition to moving the above code to a NPM module, we’ve set <code>react</code> and <code>@storybook/addons</code> as peer dependencies.</p>\n<h3 id="local-development"><a href="#local-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Local Development</h3>\n<p>When you are developing your addon as a package, you can’t use <code>npm link</code> to add it to your project. Instead add your package as a local dependency into your <code>package.json</code> as shown below:</p>\n<pre><code class="language-json">{\n  "dependencies": {\n    "@storybook/addon-notes": "file:///home/username/myrepo"\n  }\n}\n</code></pre>\n<h3 id="package-maintenance"><a href="#package-maintenance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Package Maintenance</h3>\n<p>Your packaged Storybook addon needs to be written in ES5. If you are using ES6, then you need to transpile it.\nIn that case, we recommend to use <a href="https://github.com/kadirahq/react-cdk">React CDK</a> for that.</p>',fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},pathContext:{slug:"/addons/writing-addons/"}}}});
//# sourceMappingURL=path---addons-writing-addons-b2c4aebf74f115d30cbd.js.map