const text = [
  "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ... nemo mirabatur. Mike suspectas habere possunt, sed quod omnes illi eris. Obsecro, unum homicidam maniaco tempore.",
  "Ecce dabo Pinkman Isai OK? Sicut locutus est tibi, et datus est, et hic sine Semper consequat volumus ... et ille in urbe ista licet? Et infernus, ubi tu non Virginiae ornare vel ipsum. Ut enim Albuquerque et ille eum iure hic, et ego ducam te ad iustitiam. Quid dicis?",
  "At nolo de me ipso turpis. Ut nullam curae. Scis quid mihi quod infernum sit amet nunc magis animum, nunc eros eget quam cogitatione emptio damnat. Purus? Sic, si fieri justi ... amabo.",
  "Prohibere. Striga! Ut custodiant te sermonem dicens - periculi ... periculo! Non ego illud numquam. Dixi sunt implicatae. Elatus deinde manubrio!",
  "Gus sit amet suum motum. Nescio quando, aut quomodo, nescio quo. Illud scio, amet tortor. Suarum impotens prohibere eum.",
  "Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere. Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios ad necem ... hmm? Gus! Est, ante me factus singulis decem gradibus. Et nunc ad aliud opus mihi tandem tollendum est puer ille consensus et nunc fugit. Ipse suus obtinuit eam. Non solum autem illa, sed te tractantur in se trahens felis.",
  "No! Hoc non credant? Gus habet cameras ubique placet. Audire te! Non, omnia novit, omnia simul. Ubi eras hodie? In Lab! Et vos nolite cogitare suus 'possible ut Tyrus de cigarette elevaverunt CAPSA vestris? Age! Tu non vides? Pompeius extrema partem es. Tu omne quod ille voluit.",
  "Tu nunc coci ejus. Tu autem cocus Lab et probavimus liceat mihi sine causa est nunc coci interficere. Reputo it! Suus egregie. Ut antecedat. Quod si putas me posse facere, ergo ante. Pone aute in caput, et nunc interficere. Faciat! Fac. Fac. Fac.",
  "Saule ... , ostendit quod hoc quidem ... hoc quod dixit, ... potuit adiutorium mihi, et educat me in tota vita nova facio certus ut Im 'non invenit. Ego quidem illius memini Saul. Gus sit amet interfíciat mei tota familia. Nunc opus est mihi iste. Saul ... nunc Saule.",
  "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo.",
];

const btn = document.querySelector(".btn");

const form = document.querySelector(".loremForm");

const input = document.getElementById("amount");

const result = document.querySelector(".loremText");

console.log(result);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(input.value);
  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<div class="result">${
      text[Math.floor(Math.random() * text.length)]
    }</div>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<div class="result">${item}</div>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
