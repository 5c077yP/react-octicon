require('./demo.css')

var React = require('react')
var Octicon = require('../lib/index')

var OCTICON_NAMES = 'alert alignment-align alignment-aligned-to alignment-unalign arrow-down arrow-left arrow-right arrow-small-down arrow-small-left arrow-small-right arrow-small-up arrow-up beer book bookmark briefcase broadcast browser bug calendar check checklist chevron-down chevron-left chevron-right chevron-up circle-slash circuit-board clippy clock cloud-download cloud-upload code color-mode comment-add comment comment-discussion credit-card dash dashboard database device-camera device-camera-video device-desktop device-mobile diff diff-added diff-ignored diff-modified diff-removed diff-renamed ellipsis eye-unwatch eye-watch eye file-binary file-code file-directory file-media file-pdf file-submodule file-symlink-directory file-symlink-file file-text file-zip flame fold gear gift gist gist-secret git-branch-create git-branch-delete git-branch git-commit git-compare git-merge git-pull-request-abandoned git-pull-request globe graph heart history home horizontal-rule hourglass hubot inbox info issue-closed issue-opened issue-reopened jersey jump-down jump-left jump-right jump-up key keyboard law light-bulb link link-external list-ordered list-unordered location gist-private mirror-private git-fork-private lock logo-github mail mail-read mail-reply mark-github markdown megaphone mention microscope milestone mirror-public mirror mortar-board move-down move-left move-right move-up mute no-newline octoface organization package paintcan pencil person-add person-follow person pin playback-fast-forward playback-pause playback-play playback-rewind plug repo-create gist-new file-directory-create file-add plus podium primitive-dot primitive-square pulse puzzle question quote radio-tower repo-delete repo repo-clone repo-force-push gist-fork repo-forked repo-pull repo-push rocket rss ruby screen-full screen-normal search-save search server settings log-in sign-in log-out sign-out split squirrel star-add star-delete star steps stop repo-sync sync tag-remove tag-add tag telescope terminal three-bars thumbsdown thumbsup tools trashcan triangle-down triangle-left triangle-right triangle-up unfold unmute versions remove-close x zap'.split(' ').sort()

var App = React.createClass({
  getInitialState() {
    return {mega: true, name: 'sync', spin: true}
  },
  getCode() {
    var {mega, name, spin} = this.state
    return `<Octicon name="${name}"${mega ? ' mega' : ''}${spin ? ' spin' : ''}/>`
  },
  handleCheckedChange(e) {
    this.setState({[e.target.name]: e.target.checked})
  },
  handleDelayedValueChange(e) {
    var target = e.target
    setTimeout(() => (this.setState({[target.name]: target.value})), 0)
  },
  handleValueChange(e) {
    this.setState({[e.target.name]: e.target.value})
  },
  render() {
    var {mega, name, spin} = this.state
    return <div className="App">
      <h1>react-octicon</h1>
      <p><Octicon name={name} mega={mega} spin={spin}/></p>
      <p><code>{this.getCode()}</code></p>
      <p>
        <select name="name" value={name}
                onChange={this.handleValueChange}
                onKeyDown={this.handleDelayedValueChange}
                onKeyUp={this.handleValueChange}>
          {OCTICON_NAMES.map(name => <option>{name}</option>)}
        </select>{' '}
        <label><input type="checkbox" name="mega" checked={mega} onChange={this.handleCheckedChange}/> mega</label>{' '}
        <label><input type="checkbox" name="spin" checked={spin} onChange={this.handleCheckedChange}/> spin</label>
      </p>
      <p><small><a href="https://github.com/insin/react-octicon"><Octicon name="repo-forked"/> me on <Octicon name="logo-github"/></a></small></p>
    </div>
  }
})

React.render(<App/>, document.querySelector('#app'))
