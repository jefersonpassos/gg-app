declare var UIkit: any;

export class UikitHelper {

    public static alert(message: String) {
        UIkit.notification(
            {
                message: message,
                pos: 'top-right',
                status: 'success'
            }
        );
    }
}
