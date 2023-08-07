const validatePostalCode = () => {

    const postalCodeInput = document.getElementById('postalCode');
    const errorMessage = document.getElementById('error-message');
    const specialShippingDivBody = document.getElementById('specialShippingBody');
    // const specialShippingDiv = document.getElementById('specialShipping');

    const postalCodeValue = postalCodeInput.value.trim();

    if ( postalCodeValue.length > 8 || postalCodeValue.length < 3 ) {

        errorMessage.textContent = 'El código postal debe tener entre 3 y 8 caracteres.';
        // specialShippingDiv.style.display = 'none';
        specialShippingDivBody.style.display = 'none';

    } else errorMessage.textContent = ''; 
    

    if (postalCodeValue === '9011') { 
        // specialShippingDiv.style.display = 'block';
        specialShippingDivBody.style.display = 'block';
    }
}
