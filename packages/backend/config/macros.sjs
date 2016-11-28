syntax unless = function (ctx) {
  let x = ctx.next().value;
  return #`if (!${x}) `;
}
