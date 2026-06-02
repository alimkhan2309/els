<template>
    <div class="whatsapp-button">
        <a href="https://wa.me/1234567890" target="_blank">
            <img src="/icons/whatsapp.png" alt="WhatsApp Icon" />
        </a>
    </div>
</template>
<style lang="scss" scoped>
.whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    // width: clamp(32px, calc(-2.909px + 10.909vw), 128px);
    // height: clamp(32px, calc(-2.909px + 10.909vw), 128px);
    border-radius: 50%;
    // background-color: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    img {
        width: clamp(42px, calc(-2.909px + 10.909vw), 64px);
        height: clamp(42px, calc(-2.909px + 10.909vw), 64px);
    }
}
</style>