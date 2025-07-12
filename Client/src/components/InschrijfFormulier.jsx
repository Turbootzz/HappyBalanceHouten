import { useState } from 'react';

const AanvraagFormulier = () => {
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    adres: '',
    postcode: '',
    woonplaats: '',
    telefoon: '',
    email: '',
    geslachtBaby: '',
    geboortedatumBaby: '',
    opmerkingen: '',
    cursusType: 'individueel',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'Inschrijving Babymassage',
          name: `${form.voornaam} ${form.achternaam}`,
          email: form.email,
          message: `
<b>Voornaam:</b> ${form.voornaam}<br/>
<b>Achternaam:</b> ${form.achternaam}<br/>
<b>Adres:</b> ${form.adres}<br/>
<b>Postcode en woonplaats:</b> ${form.postcode} ${form.woonplaats}<br/>
<b>Telefoonnummer:</b> ${form.telefoon}<br/>
<b>Email:</b> ${form.email}<br/>
<b>Geslacht baby:</b> ${form.geslachtBaby}<br/>
<b>Geboortedatum baby:</b> ${form.geboortedatumBaby}<br/>
<b>Type cursus:</b> ${form.cursusType}<br/>
<b>Opmerkingen:</b> ${form.opmerkingen}
          `
        })
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          voornaam: '',
          achternaam: '',
          adres: '',
          postcode: '',
          woonplaats: '',
          telefoon: '',
          email: '',
          geslachtBaby: '',
          geboortedatumBaby: '',
          opmerkingen: '',
          cursusType: 'individueel',
        });
      } else {
        setError('Er ging iets mis met het verzenden. Probeer het later opnieuw.');
      }
    } catch (err) {
      setError('Er is een verbindingsfout opgetreden.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-8 rounded-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center">Inschrijfformulier Babymassage</h2>

      {success && <p className="text-green-600 mb-4 text-center">Je inschrijving is verzonden!</p>}
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="voornaam" value={form.voornaam} onChange={handleChange} placeholder="Voornaam" required className="input" />
        <input name="achternaam" value={form.achternaam} onChange={handleChange} placeholder="Achternaam" required className="input" />
        <input name="adres" value={form.adres} onChange={handleChange} placeholder="Adres" required className="input" />
        <input name="postcode" value={form.postcode} onChange={handleChange} placeholder="Postcode" required className="input" />
        <input name="woonplaats" value={form.woonplaats} onChange={handleChange} placeholder="Woonplaats" required className="input" />
        <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange} placeholder="06xxxxxxxx" pattern="^06[0-9]{8}$" required className="input" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="E-mailadres" required className="input" />
        <input type="date" name="geboortedatumBaby" value={form.geboortedatumBaby} onChange={handleChange} required className="input" />
      </div>

      <div className="mt-4">
        <p className="mb-2">Geslacht baby:</p>
        <label className="mr-4">
          <input type="radio" name="geslachtBaby" value="meisje" checked={form.geslachtBaby === 'meisje'} onChange={handleChange} required className="mr-1" />
          Meisje
        </label>
        <label>
          <input type="radio" name="geslachtBaby" value="jongen" checked={form.geslachtBaby === 'jongen'} onChange={handleChange} required className="mr-1" />
          Jongen
        </label>
      </div>

      <div className="mt-4">
        <select name="cursusType" value={form.cursusType} onChange={handleChange} className="input">
          <option value="individueel">Individueel</option>
          <option value="duo">Duo</option>
        </select>
      </div>

      <div className="mt-4">
        <textarea name="opmerkingen" value={form.opmerkingen} onChange={handleChange} placeholder="Opmerkingen of bijzonderheden" className="input h-24" />
      </div>

      <button type="submit" className="bg-maindark hover:bg-maindarker text-white px-6 py-2 rounded-md mt-6">
        Verzenden
      </button>
    </form>
  );
};

export default AanvraagFormulier;