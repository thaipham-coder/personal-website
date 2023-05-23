import { ButtonProps } from '@/types/components/button';
import styles from '@/styles/modules/HeaderBasic.module.scss';
import Button from './shared/Button';
import classNames from 'classnames';
import CharsInOut from './shared/gsap/CharsInOut';

export default function HeaderBasic({
    titles,
    wysiwyg,
    button,
    className
}: {
    titles: string[];
    wysiwyg?: string;
    button?: ButtonProps;
    className?: string;
}) {
    return (
        <>
            {titles.length > 0 &&
                <section className={classNames
                    (
                        styles['c-headerBasic'],
                        styles[className!]
                    )}
                >
                    <div className="o-container">
                        <div className="o-grid">
                            <div className={classNames
                                (
                                    'u-text--center',
                                    styles['c-headerBasic__content']
                                )}
                            >
                                    <h1>
                                        {titles.map((title, i) => (
                                            <CharsInOut
                                                delay={0.46}
                                                target="#title"
                                                key={i}
                                            >
                                                <span id="title">
                                                    {title}
                                                </span>
                                            </CharsInOut>

                                        ))}
                                    </h1>
                                {wysiwyg &&
                                    <div className="o-wysiwyg u-uppercase">
                                        <p>{wysiwyg}</p>
                                    </div>
                                }
                                {button &&
                                    <Button
                                        label={button.label}
                                        href={button.href}
                                        isExternal={button.isExternal}
                                        externalHref={button.externalHref}
                                        anchor={button.anchor}
                                        onClick={button.onClick}
                                        className={button.className}
                                        wrapperClassName={styles['c-headerBasic__btn']}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}