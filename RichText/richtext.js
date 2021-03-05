var isInEditMode = true;

function estilo()
{
    document.getElementById("richTextField").contentDocument.body.style.fontFamily = "Arial, Helvetica, sans-serif";
}

function enableEditMode ()
{
    richTextField.document.designMode = 'On';
}

function execCmd(command) 
{
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg)
{
    richTextField.document.execCommand(command, false, arg);
}

function toggleEdit() 
{
    if (isInEditMode == true)
    {
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
    }
    else if (isInEditMode == false)
    {
        richTextField.document.designMode = 'On';
        isInEditMode = true;
    }
}