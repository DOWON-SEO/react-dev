import Icon from "../../theme/daisyui/Icon";

export default function IconTest() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">CopyMe</h2>
            <div className="mt-4">
                <span className="material-icons">settings</span>
                <Icon className="btn-primary btn-lg" name="settings" />
                <Icon className="btn-secondary btn-md" name="done" />
                <Icon className="btn-secondary btn-sm" name="menu" />
                <Icon className="btn-success btn-xs" name="file_upload" />
            </div>
        </section>
    );
}
