// A utility function to safely escape JSON for embedding in a <script> tag
module.exports = function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
