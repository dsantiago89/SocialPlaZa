
guidedModel =// @startlock
{
	Empresas :
	{
		methods :
		{// @endlock
			insertaEmpresa:function(vEmpresa)
			{// @lock
				var emp = ds.Entidades.find("Nombre = "+vEmpresa);
				new_empresa = new ds.Empresas({
					Entidad: emp
				}).save();
			}// @startlock
		}
	},
	Entidades :
	{
		NombreCompleto :
		{
			onGet:function()
			{// @endlock
				return this.Nombre+" "+this.Apellido1+" "+this.Apellido2;
			}// @startlock
		},
		methods :
		{// @endlock
			insertaEntidad:function(vNombre, vApellido1, vApellido2)
			{// @lock
				new_entidad = new ds.Entidades({
					Nombre: vNombre,
					Apellido1: vApellido1,
					Apellido2: vApellido2
				}).save();
				
			}// @startlock
		}
	},
	Usuarios :
	{
		methods :
		{// @endlock
			insertaUsuario:function(vNombreAcceso, vPass)
			{// @lock
				var entorno = ds.Entornos.find("ID = 1");
				new_usuario = new ds.Usuarios({
					NombreAcceso: vNombreAcceso,
					Password: vPass,
					Entorno: entorno
				}).save();
			}// @startlock
		}
	}
};// @endlock
